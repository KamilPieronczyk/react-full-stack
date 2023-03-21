import AssignmentIcon from '@mui/icons-material/Assignment';
import { default as AutoStoriesIcon, default as SvgIcon } from '@mui/icons-material/AutoStories';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { SvgIconProps } from '@mui/material';
import { CategoryType } from '@react-full-stack/models';

/* eslint-disable-next-line */
export interface CategoryIconProps extends SvgIconProps {
  name: CategoryType;
}

const IconsDictionary: Record<CategoryType, typeof SvgIcon> = {
  books: AutoStoriesIcon,
  movies: LocalMoviesIcon,
  music: LibraryMusicIcon,
  task: AssignmentIcon,
};

export function CategoryIcon({ name, ...props }: CategoryIconProps) {
  const Icon = IconsDictionary[name];
  return <Icon {...props} />;
}

export default CategoryIcon;
