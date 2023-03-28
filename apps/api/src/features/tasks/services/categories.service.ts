import { Injectable } from '@nestjs/common';
import { Category } from '@react-full-stack/database';
import { Result } from 'apps/api/src/common/result/result.class';
import { PrismaService } from 'apps/api/src/prisma/prisma.service';

@Injectable()
export class CategoriesService {
  constructor(private prisma: PrismaService) {}

  async getAll(): Promise<Result<Category[]>> {
    try {
      const categories = await this.prisma.category.findMany();
      return Result.ok(categories);
    } catch (error) {
      return Result.fail(error);
    }
  }
}
