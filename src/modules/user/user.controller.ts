import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { RegistrationDto } from './dto/registration.dto';
import { Cookies } from '../../infrastructure/decorators/cookie.decorator';
import { Role } from '../../models/enums/role.enum';
import { CookiesGuard } from '../../infrastructure/cookies.guard';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('registration')
  @HttpCode(HttpStatus.CREATED)
  async registration(@Body() data: RegistrationDto) {
    await this.userService.registerUser({ ...data, roles: [Role.LEGIONER] });
  }

  @Get('test')
  async get(@Cookies('login') name: string) {
    return `${name} is auth`;
  }
}
