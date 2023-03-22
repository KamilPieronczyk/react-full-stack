import { CategoryType } from '@react-full-stack/models';
import { IToDoCategory } from './../ui/categories/categories.interface';
import { CATEGORIES } from './categories';

export const CATEGORY_ENTRIES = Object.entries(CATEGORIES).map(([key, value]: [CategoryType, IToDoCategory]) => ({
  key,
  category: value,
}));
