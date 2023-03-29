import { Injectable } from '@nestjs/common';
import { User } from '@react-full-stack/database';
import { CategoryType, ITask } from '@react-full-stack/models';
import { TaskMapper } from '../mappers/task.mapper';
import { Result } from './../../../common/result/result.class';
import { PrismaService } from './../../../prisma/prisma.service';
import { CreateTaskDto } from './../contracts/create-task.dto';
import { CategoriesService } from './categories.service';

@Injectable()
export class TasksService {
  constructor(
    private prisma: PrismaService,
    private categoriesService: CategoriesService,
    private taskMapper: TaskMapper
  ) {}

  async create(user: User, createTaskDto: CreateTaskDto): Promise<Result<void>> {
    try {
      const categoryId = await this.categoriesService.getCategoryIdByKey(createTaskDto.categoryKey);
      await this.prisma.task.create({
        data: {
          name: createTaskDto.title,
          description: createTaskDto.description,
          categoryId: categoryId,
          userId: user.id,
        },
      });
      return Result.ok();
    } catch (error) {
      return Result.fail(error);
    }
  }

  async getAllByCategory(user: User, categoryKey: CategoryType): Promise<Result<ITask[]>> {
    try {
      const categoryId = await this.categoriesService.getCategoryIdByKey(categoryKey);
      const tasks = await this.prisma.task.findMany({
        where: {
          categoryId,
          userId: user.id,
        },
      });
      const mappedTasks = this.taskMapper.toResponse(tasks);
      return Result.ok(mappedTasks);
    } catch (error) {
      return Result.fail(error);
    }
  }
}
