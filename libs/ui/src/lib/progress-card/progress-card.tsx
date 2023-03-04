import { useTheme } from '@emotion/react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { SpecialColors } from '@react-full-stack/models';
import { Card, FilledIconButton, LinearProgress } from '../common';

const ProgressCardIcons = {
  books: <AutoStoriesIcon />,
  movies: <LocalMoviesIcon />,
  music: <LibraryMusicIcon />,
};

export type TProgressCardIconsNames = keyof typeof ProgressCardIcons;

export const ProgressCardIconsNames = Object.keys(ProgressCardIcons) as TProgressCardIconsNames[];

export interface ProgressCardProps {
  color?: SpecialColors;
  title: string;
  newTasks: number;
  completed: number;
  total: number;
  icon: TProgressCardIconsNames;
}

const defaultProps: ProgressCardProps = {
  color: 'blue',
  title: '',
  newTasks: 0,
  completed: 0,
  total: 0,
  icon: 'books',
};

export function ProgressCard(props: ProgressCardProps) {
  const theme = useTheme();
  const { icon, color, newTasks, title, completed, total } = props;

  const progress = calculateProgress(completed, total);
  const badgeBackgroundColor = theme.palette[color || 'secondary'].main;
  const iconNode = ProgressCardIcons[icon];

  return (
    <Card className="cursor-pointer">
      <CardActionArea>
        <CardContent>
          <FilledIconButton disableFocusRipple disableRipple disableTouchRipple backgroundColor={color}>
            {iconNode}
          </FilledIconButton>
          <Typography mt={1} variant="body2" className="text-gray-400">
            {newTasks} New
          </Typography>
          <Typography variant="h6" mb={2}>
            {title}
          </Typography>
          <div className="flex items-center gap-3">
            <LinearProgress value={progress} className="flex-1" color={color} />
            <div className="rounded-full px-4 py-1" style={{ backgroundColor: badgeBackgroundColor }}>
              <Typography variant="body2">
                {completed}/{total}
              </Typography>
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

ProgressCard.defaultProps = defaultProps;

function calculateProgress(completed: number, total: number) {
  return total > 0 ? Math.min((completed / total) * 100, 100) : 0;
}

export default ProgressCard;
