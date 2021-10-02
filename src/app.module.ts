import { Module } from '@nestjs/common';
import { MongoDbModule } from './modules/mongo-db/mongo-db.module';
import { CalendarModule } from './modules/calendar/calendar.module';
import { UserModule } from './modules/user/user.module';
import { ProjectsModule } from './modules/projects/projects.module';

@Module({
  imports: [MongoDbModule, CalendarModule, UserModule, ProjectsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
