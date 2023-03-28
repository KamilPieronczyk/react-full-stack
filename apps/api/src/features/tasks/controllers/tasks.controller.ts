import { Controller, Get } from '@nestjs/common';
import { Authorize, User } from '../../../core/decorators';
import { IUserJWTPayload } from '../../../models/auth/user-payload.interface';

@Controller('tasks')
export class TasksController {
  @Authorize()
  @Get()
  getUser(@User() user: IUserJWTPayload) {
    return user;
  }
}
