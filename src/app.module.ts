import { Module } from '@nestjs/common';
import { MongoDbModule } from './modules/mongo-db/mongo-db.module';
import { CalendarModule } from './modules/calendar/calendar.module';
import { UserModule } from './modules/user/user.module';
import { ProjectsModule } from './modules/projects/projects.module';
import { EventsModule } from './modules/events/events.module';

@Module({
  imports: [
    MongoDbModule,
    CalendarModule,
    UserModule,
    ProjectsModule,
    EventsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
