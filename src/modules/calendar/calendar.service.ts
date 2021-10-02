import { Injectable } from '@nestjs/common';
import { Event } from './intefaces/event.interface';

@Injectable()
export class CalendarService {
  #events: Event[] = [
    {
      type: 'birthday',
      date: new Date(2021, 9, 3).toJSON(),
      text: 'День рождения Марии Ивановой',
    },
    {
      type: 'corporate',
      date: new Date(2021, 11, 28).toJSON(),
      text: 'Корпоратив',
    },
    {
      type: 'birthday',
      date: new Date(2022, 2, 3).toJSON(),
      text: 'День рождения Александра Иванова',
    },
  ];

  async getEvents(daysInMs: number) {
    // TODO: DB
    return this.#events.filter(
      (value) => new Date(value.date) < new Date(Date.now() + daysInMs),
    );
  }
}
