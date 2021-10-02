import { UserContent } from './user-content.interface';

export interface EventContent {
  type: 'news' | 'learning';
  bonus: number;
  description: string;
  participantsList: UserContent[];
  imgUrl?: string;
}