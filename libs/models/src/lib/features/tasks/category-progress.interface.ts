import { ICategory } from './category.interface';

export interface ICategoryProgress extends ICategory {
  completedTasks: number;
  totalTasks: number;
  progress: number;
}
