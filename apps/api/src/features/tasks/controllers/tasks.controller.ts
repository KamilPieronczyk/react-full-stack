import { Body, Controller, Get, HttpStatus, Put, Query, Res } from '@nestjs/common';
import { ApiBody, ApiExtraModels } from '@nestjs/swagger';
import { User } from '@react-full-stack/database';
import { Authorize, AuthUser } from '../../../core/decorators';
import { TasksFilterDto } from '../contracts/tasks-filter.dto';
import { TasksService } from '../services/tasks.service';
import { ApiResponseBuilder } from './../../../utils/helpers/api-response-builder';
import { CreateTaskDto } from './../contracts/create-task.dto';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Authorize()
  @Put()
  @ApiBody({ type: CreateTaskDto })
  async createTask(@Res() res, @AuthUser() user: User, @Body() createTaskDto: CreateTaskDto) {
    new ApiResponseBuilder(res, await this.tasksService.create(user, createTaskDto))
      .withSuccessStatusCode(HttpStatus.CREATED)
      .build();
  }

  @Authorize()
  @Get()
  @ApiExtraModels(TasksFilterDto)
  async getTasks(@Res() res, @AuthUser() user: User, @Query() category: TasksFilterDto) {
    new ApiResponseBuilder(res, await this.tasksService.getAllByCategory(user, category.categoryKey))
      .checkForNoContent()
      .build();
  }
}
