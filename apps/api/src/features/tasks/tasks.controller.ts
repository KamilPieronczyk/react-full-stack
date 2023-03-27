import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth } from '@nestjs/swagger';
import { User } from '../../core/decorators';
import { IUserJWTPayload } from './../../models/auth/user-payload.interface';

@Controller('tasks')
export class TasksController {
  @UseGuards(AuthGuard('jwt'))
  @Get()
  @ApiBearerAuth()
  getUser(@User() user: IUserJWTPayload) {
    return user;
  }
}
