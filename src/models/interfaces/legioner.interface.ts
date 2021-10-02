import { User } from './user.interface';

export interface Legioner extends User {
  enrollEvent: (eventId: string) => boolean;
  changeState: (changes: { [title: string]: any }) => boolean;
}
