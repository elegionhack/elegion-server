import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserMongoService } from './user-mongo.service';
import { UserSchema } from './schemas/user.schema';
import { ProjectSchema } from './schemas/project.schema';
import { ProjectsMongoService } from './projects-mongo.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(new ConfigService().get('MONGODB_LINK')),
    MongooseModule.forFeature([
      { name: 'User', schema: UserSchema },
      { name: 'Project', schema: ProjectSchema },
    ]),
  ],
  providers: [UserMongoService, ProjectsMongoService],
  exports: [UserMongoService, ProjectsMongoService],
})
export class MongoDbModule {}
