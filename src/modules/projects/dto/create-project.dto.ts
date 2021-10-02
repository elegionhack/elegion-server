import { UserContent } from '../../../models/interfaces/user-content.interface';

export class CreateProjectDto {
  title: string;
  customer: string;
  description: string;
  workers: UserContent[];
  trackerLink: string;
  googleCalendarLink: string;
  telegramLink: string;
}
