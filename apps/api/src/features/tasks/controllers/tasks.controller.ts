import { Controller, Get } from '@nestjs/common';
import { User } from '@react-full-stack/database';
import { Authorize, AuthUser } from '../../../core/decorators';

@Controller('tasks')
export class TasksController {
  @Authorize()
  @Get()
  getUser(@AuthUser() user: User) {
    return user;
  }
}
