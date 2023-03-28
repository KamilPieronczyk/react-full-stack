import { Body, Controller, HttpStatus, Put, Res } from '@nestjs/common';
import { User } from '@react-full-stack/database';
import { Authorize, AuthUser } from '../../../core/decorators';
import { TasksService } from '../services/tasks.service';
import { ApiResponseBuilder } from './../../../utils/helpers/api-response-builder';
import { CreateTaskDto } from './../contracts/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Authorize()
  @Put()
  async createTask(@Res() res, @AuthUser() user: User, @Body() createTaskDto: CreateTaskDto) {
    new ApiResponseBuilder(res, await this.tasksService.create(user, createTaskDto))
      .withSuccessStatusCode(HttpStatus.CREATED)
      .build();
  }
}
