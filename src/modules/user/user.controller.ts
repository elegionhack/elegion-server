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
import { Cookies } from '../../infrastructure/decorators/cookie.decorator';
import { Role } from '../../models/enums/role.enum';
import { Status } from '../../models/enums/status.enum';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('registration')
  @HttpCode(HttpStatus.CREATED)
  async registration(@Body() data: RegistrationDto) {
    await this.userService.registerUser({
      ...data,
      role: data.role === Role.ADMIN ? Role.ADMIN : Role.LEGIONER,
      status: Status.AVAILABLE,
    });
  }

  @Get()
  async get(@Cookies() authData) {
    return await this.userService.getUserContent(
      authData['login'],
      authData['password'],
    );
  }
}
