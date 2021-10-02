import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Registration } from './types/registration.type';
import { UserMongoService } from '../mongo-db/user-mongo.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(private userCollection: UserMongoService) {}

  registerUser = async (data: Registration) => {
    try {
      const hashedPassword = await bcrypt.hash(
        data.password,
        await bcrypt.genSalt(),
      );
      await this.userCollection.save({ ...data, password: hashedPassword });
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };
}
