import { CategoryType } from '../../../ui';

export interface ICreateTaskDto {
  title: string;
  description: string;
  category: CategoryType;
}
