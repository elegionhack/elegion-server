import { Module } from '@nestjs/common';
import { EventsController } from './events.controller';
import { EventsService } from './events.service';
import { MongoDbModule } from '../mongo-db/mongo-db.module';

@Module({
  controllers: [EventsController],
  providers: [EventsService],
  imports: [MongoDbModule],
})
export class EventsModule {}
