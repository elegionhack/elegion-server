import { Injectable } from '@nestjs/common';
import { Collection } from '../../infrastructure/collection.infrastructure';
import { ProjectContent } from '../../models/interfaces/project-content.interface';
import { InjectModel } from '@nestjs/mongoose';
import { ProjectDocument } from './schemas/project.schema';
import { Model } from 'mongoose';
import { Filter } from '../../infrastructure/filter.type';

@Injectable()
export class ProjectsMongoService implements Collection<ProjectContent> {
  constructor(
    @InjectModel('Project')
    private projectModel: Model<ProjectDocument>,
  ) {}

  deleteOne(filter: Filter): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById(id: string): Promise<ProjectContent> | null {
    return undefined;
  }

  findOne(filter: Filter): Promise<ProjectContent> | null {
    return undefined;
  }

  save = async (content: ProjectContent): Promise<void> => {
    await new this.projectModel(content).save();
  };

  updateOne(filter: Filter, update: ProjectContent): Promise<void> {
    return Promise.resolve(undefined);
  }

  allDocuments = async () => this.projectModel.find();
}
