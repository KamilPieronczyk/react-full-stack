import { Injectable } from '@nestjs/common';
import { Category, Prisma } from '@react-full-stack/database';
import { ICategory, ICategoryProgress } from '@react-full-stack/models';

type CategoryCompletion = Prisma.PickArray<Prisma.TaskGroupByOutputType, 'categoryId'[]> & {
  _count: {
    _all: number;
    completed: number;
  };
};

@Injectable()
export class CategoryMapper {
  public toResponse(categories: Category[]): ICategory[] {
    return categories.map((category) => this.toICategory(category));
  }

  private toICategory(category: Category): ICategory {
    return {
      key: category.uniqueName,
      name: category.name,
      color: category.color,
    };
  }

  public toResponseWithProgress(
    tasksCompletionByCategory: CategoryCompletion[],
    categories: Category[]
  ): ICategoryProgress[] {
    return tasksCompletionByCategory.map((categoryCompletion) =>
      this.toICategoryProgress(
        categoryCompletion,
        categories.find((c) => c.id === categoryCompletion.categoryId)
      )
    );
  }

  private toICategoryProgress(categoryCompletion: CategoryCompletion, category: Category): ICategoryProgress {
    return {
      ...this.toICategory(category),
      completedTasks: categoryCompletion._count.completed,
      totalTasks: categoryCompletion._count._all,
      progress: categoryCompletion._count.completed / categoryCompletion._count._all,
    };
  }
}
