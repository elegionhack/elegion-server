import { UserContent } from './user-content.interface';

export interface ProjectContent {
  title: string;
  customer: string;
  description: string;
  workers: string[];
  trackerLink: string;
  googleCalendarLink: string;
  telegramLink: string;
  photo: string;
}
