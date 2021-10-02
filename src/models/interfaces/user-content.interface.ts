import { Role } from '../enums/role.enum';
import { Status } from '../enums/status.enum';

export interface UserContent {
  login: string;
  password: string;
  birthday: string;
  position: string;
  fullName: string;
  role: Role;
  status: Status;
  bonuses: number;
  frozenBonuses: number;
  projectLinks: string[];
  avatarUrl?: string;
  telegramLink?: string;
}
