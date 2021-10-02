import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserMongoService } from '../mongo-db/user-mongo.service';
import * as bcrypt from 'bcrypt';
import { UserContent } from '../../models/interfaces/user-content.interface';

@Injectable()
export class UserService {
  constructor(private userCollection: UserMongoService) {}

  registerUser = async (data: UserContent) => {
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
