import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProjectsMongoService } from '../mongo-db/projects-mongo.service';
import { ProjectContent } from '../../models/interfaces/project-content.interface';
import { UserMongoService } from '../mongo-db/user-mongo.service';
import { Promise } from 'mongoose';
import { UserContent } from '../../models/interfaces/user-content.interface';

@Injectable()
export class ProjectsService {
  constructor(
    private projectCollection: ProjectsMongoService,
    private userCollection: UserMongoService,
  ) {}

  all = async () => {
    const project = await this.projectCollection.allDocuments();
    const res = [];
    for (const d in project) {
      const k = await Promise.all(
        project[d].workers.map(async (id) => {
          return await this.userCollection.findById(id);
        }),
      );
      res.push({ ...project[d]['_doc'], workers: k });
    }
    return res;
  };

  createProject = async (data: ProjectContent) => {
    await this.projectCollection.save(data);
  };

  addWorkersInProject = async (workers: string[], projectId: string) => {
    try {
      const project = await this.projectCollection.findById(projectId);
      project.workers.push(...workers);
      for (const id of workers) {
        const worker = await this.userCollection.findById(id);
        worker.projectLinks.push(projectId);
        await this.userCollection.updateOne({ _id: id }, worker);
      }
      await this.projectCollection.updateOne({ _id: projectId }, project);
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  getProject = async (id: string) => {
    const project = await this.projectCollection.findById(id);
    const k = await Promise.all(
      project.workers.map(async (id) => {
        return await this.userCollection.findById(id);
      }),
    );
    project.workers = k as unknown as string[];
    return project;
  };
}
