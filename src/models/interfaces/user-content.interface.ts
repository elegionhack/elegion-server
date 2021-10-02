import { Role } from '../enums/role.enum';

export interface UserContent {
  login: string;
  password: string;
  birthday: string;
  position: string;
  fullName: string;
  roles: Role[];
  avatarUrl?: string;
}
