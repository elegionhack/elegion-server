import { UserContent } from './user-content.interface';

export interface EventContent {
  type: 'news' | 'learning';
  title: string;
  bonus: number;
  description: string;
  date: string;
  participantsList: UserContent[];
  imgUrl?: string;
}
