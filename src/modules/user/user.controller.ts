import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
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

  @Get('all')
  async getAll() {
    return await this.userService.getAll();
  }

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
  async get(login: string, password: string) {
    return await this.userService.getUserContent(login, password);
  }

  @Get(':login')
  async getByAdmin(@Param('login') login) {
    return await this.userService.getUserContentByAdmin(login);
  }
}
