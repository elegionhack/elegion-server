import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProjectsMongoService } from '../mongo-db/projects-mongo.service';
import { ProjectContent } from '../../models/interfaces/project-content.interface';
import { UserMongoService } from '../mongo-db/user-mongo.service';

@Injectable()
export class ProjectsService {
  constructor(
    private projectCollection: ProjectsMongoService,
    private userCollection: UserMongoService,
  ) {}

  all = async () => {
    return this.projectCollection.allDocuments();
  };

  createProject = async (data: ProjectContent) => {
    await this.projectCollection.save(data);
  };

  addWorkersInProject = async (workers: string[], projectId: string) => {
    try {
      const project = await this.projectCollection.findById(projectId);
      project.workers.push(...workers);
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
