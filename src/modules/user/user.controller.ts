import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { UserService } from './user.service';
import { RegistrationDto } from './dto/registration.dto';
import { UserRecord } from '../../infrastructure/user-record.infrastructure';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('registration')
  @HttpCode(HttpStatus.CREATED)
  async registration(@Body() data: RegistrationDto) {
    await this.userService.registerUser(data as UserRecord);
  }
}
