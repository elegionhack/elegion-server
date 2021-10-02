import { UserContent } from './user-content.interface';

export interface ProjectContent {
  title: string;
  customer: string;
  description: string;
  workers: UserContent[];
  trackerLink: string;
  googleCalendarLink: string;
  telegramLink: string;
}
