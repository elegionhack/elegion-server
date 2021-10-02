import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ProjectContent } from '../../models/interfaces/project-content.interface';
import { EventsService } from './events.service';
import { EventContent } from '../../models/interfaces/event-content.interface';

@Controller('events')
export class EventsController {
  constructor(private eventService: EventsService) {}

  @Post('create')
  async createEvent(@Body() data: EventContent) {
    await this.eventService.createEvent(data);
  }

  @Get()
  async all() {
    return await this.eventService.all();
  }

  @Post('enroll')
  async enroll(@Body() data: { eventId: string; userId: string }) {
    await this.eventService.enroll(data.eventId, data.userId);
  }

  @Get(':id')
  async getEvent(@Param('id') id) {
    return await this.eventService.getEvent(id);
  }
}
