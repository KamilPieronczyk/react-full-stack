import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { TasksController } from './controllers/tasks.controller';
import { CategoryMapper } from './mappers/category.mapper';
import { CategoriesService } from './services/categories.service';
import { TasksService } from './services/tasks.service';

@Module({
  controllers: [TasksController, CategoriesController],
  imports: [],
  providers: [CategoriesService, CategoryMapper, TasksService],
  exports: [],
})
export class TasksModule {}
