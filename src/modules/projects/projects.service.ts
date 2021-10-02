import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ProjectsMongoService } from '../mongo-db/projects-mongo.service';
import { ProjectContent } from '../../models/interfaces/project-content.interface';
import { UserContent } from '../../models/interfaces/user-content.interface';

@Injectable()
export class ProjectsService {
  constructor(private projectCollection: ProjectsMongoService) {}

  all = async () => {
    return this.projectCollection.allDocuments();
  };

  createProject = async (data: ProjectContent) => {
    await this.projectCollection.save(data);
  };

  addWorkersInProject = async (workers: string[], projectId: string) => {
    try {
      const project = await this.projectCollection.findById(projectId);
      console.log(project);
      // TODO: ПЕРЕДЕЛАТЬ
      project.workers.push(...workers);
      console.log(project);
      await this.projectCollection.updateOne({ _id: projectId }, project);
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };
}
