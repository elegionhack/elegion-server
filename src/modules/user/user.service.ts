import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserMongoService } from '../mongo-db/user-mongo.service';
import * as bcrypt from 'bcrypt';
import { UserContent } from '../../models/interfaces/user-content.interface';
import { Role } from '../../models/enums/role.enum';

@Injectable()
export class UserService {
  constructor(private userCollection: UserMongoService) {}

  getAll = async () => {
    return await this.userCollection.allDocuments();
  };

  getUserContentByAdminById = async (id: string) => {
    try {
      const user = await this.userCollection.findById(id);
      if (!user) {
        return new HttpException(
          `User with ${id} does not exist`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return user;
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  getUserContentByAdmin = async (login: string) => {
    try {
      const user = await this.userCollection.findOne({ login });
      if (!user) {
        return new HttpException(
          `User with ${login} does not exist`,
          HttpStatus.BAD_REQUEST,
        );
      }
      return user;
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  getUserContent = async (login, password) => {
    try {
      const user = await this.userCollection.findOne({ login });
      if (!(await bcrypt.compare(password, user.password))) {
        return new HttpException('Invalid data', HttpStatus.BAD_REQUEST);
      }
      return user;
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  registerUser = async (data: UserContent) => {
    try {
      const hashedPassword = await this.#hashPassword(data.password);
      await this.userCollection.save({ ...data, password: hashedPassword });
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  #hashPassword = async (password: string) => {
    return await bcrypt.hash(password, await bcrypt.genSalt());
  };
}
