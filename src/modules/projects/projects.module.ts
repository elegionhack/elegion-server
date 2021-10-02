import { Module } from '@nestjs/common';
import { ProjectsController } from './projects.controller';
import { ProjectsService } from './projects.service';
import { MongoDbModule } from '../mongo-db/mongo-db.module';

@Module({
  controllers: [ProjectsController],
  providers: [ProjectsService],
  imports: [MongoDbModule],
})
export class ProjectsModule {}
