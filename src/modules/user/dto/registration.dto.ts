export class RegistrationDto {
  login: string;
  password: string;
  birthday: string;
  position: string;
  fullName: string;
  role: 'legioner' | 'admin';
  avatarUrl?: string;
}
