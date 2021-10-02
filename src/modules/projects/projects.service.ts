import { Injectable } from '@nestjs/common';
import { ProjectsMongoService } from '../mongo-db/projects-mongo.service';
import { ProjectContent } from '../../models/interfaces/project-content.interface';

@Injectable()
export class ProjectsService {
  constructor(private projectCollection: ProjectsMongoService) {}

  all = async () => {
    return this.projectCollection.allDocuments();
  };

  createProject = async (data: ProjectContent) => {
    console.log(data);
    await this.projectCollection.save(data);
  };
}
