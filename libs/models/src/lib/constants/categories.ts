import { CategoryType, IToDoCategory } from '../ui';

export const CATEGORIES: Record<CategoryType, IToDoCategory> = {
  books: {
    name: 'Books',
    color: 'blue',
  },
  movies: {
    name: 'Movies',
    color: 'green',
  },
  music: {
    name: 'Music',
    color: 'orange',
  },
  task: {
    name: 'Task',
    color: 'purple',
  },
};
