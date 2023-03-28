import { Module } from '@nestjs/common';
import { CategoriesController } from './controllers/categories.controller';
import { TasksController } from './controllers/tasks.controller';
import { CategoryMapper } from './mappers/category.mapper';
import { CategoriesService } from './services/categories.service';

@Module({
  controllers: [TasksController, CategoriesController],
  imports: [],
  providers: [CategoriesService, CategoryMapper],
  exports: [],
})
export class TasksModule {}
