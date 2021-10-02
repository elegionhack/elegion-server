import { Module } from '@nestjs/common';
import { MongoDbModule } from './modules/mongo-db/mongo-db.module';
import { CalendarModule } from './modules/calendar/calendar.module';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [MongoDbModule, CalendarModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
