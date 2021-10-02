import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { Collection } from '../../infrastructure/collection.infrastructure';
import { Filter } from '../../infrastructure/filter.type';
import { UserContent } from '../../models/interfaces/user-content.interface';
import { User } from '../../models/interfaces/user.interface';

@Injectable()
export class UserMongoService implements Collection<UserContent> {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDocument>,
  ) {}

  deleteOne(filter: Filter): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById(id: string): Promise<UserContent> | null {
    return undefined;
  }

  findOne = async (filter: Filter): Promise<UserContent> | null =>
    this.userModel.findOne(filter);

  save = async (content: UserContent): Promise<void> => {
    await new this.userModel(content).save();
  };

  updateOne(filter: Filter, update: UserContent): Promise<void> {
    return Promise.resolve(undefined);
  }
}
