import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegistrationDto } from './dto/registration.dto';
import { UserRecord } from '../../infrastructure/user-record.infrastructure';
import { Cookies } from '../../infrastructure/decorators/cookie.decorator';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('registration')
  @HttpCode(HttpStatus.CREATED)
  async registration(@Body() data: RegistrationDto) {
    await this.userService.registerUser(data);
  }

  @Get('test')
  async get(@Cookies('name') name: string) {
    return name;
  }
}
