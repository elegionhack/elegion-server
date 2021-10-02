import { EventContent } from './event-content.interface';

export interface Event {
  content: () => EventContent;
}
