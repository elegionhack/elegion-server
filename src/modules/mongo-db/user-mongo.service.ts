import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { UserDocument } from './schemas/user.schema';
import { Model } from 'mongoose';
import { Collection } from '../../infrastructure/collection.infrastructure';
import { UserRecord } from '../../infrastructure/user-record.infrastructure';
import { Filter } from '../../infrastructure/filter.type';

@Injectable()
export class UserMongoService implements Collection<UserRecord> {
  constructor(
    @InjectModel('User')
    private userModel: Model<UserDocument>,
  ) {}

  deleteOne(filter: Filter): Promise<void> {
    return Promise.resolve(undefined);
  }

  findById(id: string): Promise<UserRecord> | null {
    return undefined;
  }

  findOne(filter: Filter): Promise<UserRecord> | null {
    return undefined;
  }

  save = async (content: UserRecord): Promise<void> => {
    await new this.userModel(content).save();
  };

  updateOne(filter: Filter, update: UserRecord): Promise<void> {
    return Promise.resolve(undefined);
  }
}
