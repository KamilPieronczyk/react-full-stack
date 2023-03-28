import { Injectable } from '@nestjs/common';
import { User } from '@react-full-stack/database';
import { Result } from './../../../common/result/result.class';
import { PrismaService } from './../../../prisma/prisma.service';
import { CreateTaskDto } from './../contracts/create-task.dto';
import { CategoriesService } from './categories.service';

@Injectable()
export class TasksService {
  constructor(private prisma: PrismaService, private categoriesService: CategoriesService) {}

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
}
