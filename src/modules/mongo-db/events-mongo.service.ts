import { Injectable } from '@nestjs/common';
import { Collection } from '../../infrastructure/collection.infrastructure';
import { EventContent } from '../../models/interfaces/event-content.interface';
import { InjectModel } from '@nestjs/mongoose';
import { EventDocument } from './schemas/event.schema';
import { Model } from 'mongoose';
import { Filter } from '../../infrastructure/filter.type';

@Injectable()
export class EventsMongoService implements Collection<EventContent> {
  constructor(
    @InjectModel('Event')
    private eventModel: Model<EventDocument>,
  ) {}

  deleteOne(filter: Filter): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById = async (id: string): Promise<EventContent> | null =>
    await this.eventModel.findOne({ _id: id });

  findOne = async (filter: Filter): Promise<EventContent> | null =>
    await this.eventModel.findOne(filter);

  save = async (content: EventContent): Promise<void> => {
    await new this.eventModel(content).save();
  };

  updateOne = async (filter: Filter, update: EventContent): Promise<void> => {
    await this.eventModel.updateOne(filter, update);
  };

  allDocuments = async () => this.eventModel.find();
}
