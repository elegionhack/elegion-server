import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EventsMongoService } from '../mongo-db/events-mongo.service';
import { EventContent } from '../../models/interfaces/event-content.interface';
import { UserMongoService } from '../mongo-db/user-mongo.service';
import { UserContent } from '../../models/interfaces/user-content.interface';

@Injectable()
export class EventsService {
  constructor(
    private eventCollection: EventsMongoService,
    private userCollection: UserMongoService,
  ) {}

  all = async () => {
    return this.eventCollection.allDocuments();
  };

  createEvent = async (data: EventContent) => {
    await this.eventCollection.save(data);
  };

  enroll = async (eventId: string, userId: string) => {
    try {
      const event = await this.eventCollection.findById(eventId);
      event.participantsList.push(userId as unknown as UserContent);
      const user = await this.userCollection.findById(userId);
      user.frozenBonuses += event.bonus;
      await this.userCollection.updateOne({ _id: userId }, user);
      await this.eventCollection.updateOne({ _id: eventId }, event);
    } catch (e) {
      return new HttpException(
        'Internal error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  };

  getEvent = async (id: string) => {
    const event = await this.eventCollection.findById(id);
    const k = await Promise.all(
      event.participantsList.map(async (id) => {
        return await this.userCollection.findById(id as unknown as string);
      }),
    );
    event.participantsList = k;
    return event;
  };
}
