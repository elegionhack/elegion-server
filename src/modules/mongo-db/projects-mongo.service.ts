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

  findById = async (id: string): Promise<ProjectContent> | null =>
    await this.findOne({ _id: id });

  findOne = async (filter: Filter): Promise<ProjectContent> | null =>
    await this.projectModel.findOne(filter);

  save = async (content: ProjectContent): Promise<void> => {
    await new this.projectModel(content).save();
  };

  async updateOne(filter: Filter, update: ProjectContent): Promise<void> {
    await this.projectModel.updateOne(filter, update);
  }

  allDocuments = async (): Promise<ProjectContent[]> =>
    this.projectModel.find();
}
