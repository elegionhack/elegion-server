import { Injectable } from '@nestjs/common';
import { Collection } from '../../infrastructure/collection.infrastructure';
import { ProjectContent } from '../../models/interfaces/project-content.interface';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProjectsMongoService implements Collection<ProjectContent> {
  constructor(
    @InjectModel('Project')
    private projectModel: Model<Pro>,
  ) {}
}
