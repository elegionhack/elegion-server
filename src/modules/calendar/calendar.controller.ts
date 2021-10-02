import { Controller, Get, Query } from '@nestjs/common';
import { CalendarService } from './calendar.service';

@Controller('calendar')
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  async getEvents(@Query('days') query: number) {
    const msInDay = 86400000;
    return this.calendarService.getEvents(query * msInDay);
  }
}
