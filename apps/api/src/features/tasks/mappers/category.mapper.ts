import { Injectable } from '@nestjs/common';
import { Category } from '@react-full-stack/database';
import { ICategory } from '@react-full-stack/models';

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
}
