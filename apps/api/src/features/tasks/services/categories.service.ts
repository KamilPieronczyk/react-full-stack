import { Injectable } from '@nestjs/common';
import { ICategory } from '@react-full-stack/models';
import { Result } from '../../../common/result/result.class';
import { PrismaService } from '../../../prisma/prisma.service';
import { CategoryMapper } from '../mappers/category.mapper';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService, private categoryMapper: CategoryMapper) {}

  async getAll(): Promise<Result<ICategory[]>> {
    try {
      const categories = await this.prisma.category.findMany();
      const mappedCategories = this.categoryMapper.toResponse(categories);
      return Result.ok(mappedCategories);
    } catch (error) {
      return Result.fail(error);
    }
  }
}
