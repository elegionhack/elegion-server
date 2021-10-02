import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Registration } from './types/registration.type';
import { UserMongoService } from '../mongo-db/user-mongo.service';

@Injectable()
export class UserService {
  constructor(private userCollection: UserMongoService) {}

  registerUser = async (data: Registration) => {
    try {
      await this.userCollection.save(data);
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };
}
