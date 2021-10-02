import { UserContent } from './user-content.interface';

export interface User {
  content: () => UserContent;
}
