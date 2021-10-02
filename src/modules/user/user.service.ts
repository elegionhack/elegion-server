import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UserMongoService } from '../mongo-db/user-mongo.service';
import * as bcrypt from 'bcrypt';
import { UserContent } from '../../models/interfaces/user-content.interface';
import { ProjectsMongoService } from '../mongo-db/projects-mongo.service';

@Injectable()
export class UserService {
  constructor(
    private userCollection: UserMongoService,
    private projectCollection: ProjectsMongoService,
  ) {}

  getAll = async () => {
    return await this.userCollection.allDocuments();
  };

  getUserContentByAdminById = async (id: string) => {
    try {
      const user = await this.#buildUser(['id', id]);
      if (!user) {
        return new HttpException(
          `User with ${id} does not exist`,
          HttpStatus.BAD_REQUEST,
        );
      }
      console.log(user);
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
      const user = await this.#buildUser(['login', login]);
      //await this.userCollection.findOne({ login });
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
      const user = await this.#buildUser(['login', login]);
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

  registerUser = async (
    data: Omit<UserContent, 'bonuses' | 'frozenBonuses' | 'projectLinks'>,
  ) => {
    try {
      const hashedPassword = await this.#hashPassword(data.password);
      await this.userCollection.save({
        ...data,
        password: hashedPassword,
        bonuses: 0,
        frozenBonuses: 0,
        projectLinks: [],
      });
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

  #buildUser = async ([type, content]) => {
    let user: UserContent;
    if (type === 'id') {
      user = await this.userCollection.findById(content);
    } else {
      user = await this.userCollection.findOne({ login: content });
    }
    const projects = await Promise.all(
      user.projectLinks.map(async (id) => {
        const k = await this.projectCollection.findById(id);
        return {
          title: k.title,
          customer: k.customer,
          description: k.description,
          photo: k.photo,
        };
      }),
    );
    return { ...user['_doc'], projectLinks: projects };
  };
}
