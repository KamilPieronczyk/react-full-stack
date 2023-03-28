import { Module } from '@nestjs/common';
import { TasksController } from './controllers/tasks.controller';
import { CategoriesService } from './services/categories.service';
import { CategoriesController } from './controllers/categories.controller';

@Module({
  controllers: [TasksController, CategoriesController],
  imports: [],
  providers: [CategoriesService],
  exports: [],
})
export class TasksModule {}
