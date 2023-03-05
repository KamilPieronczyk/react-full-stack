import { CardContent, Typography } from '@mui/material';
import { Card, LinearProgress } from '../../../common';

export interface ProgressCard3DProps {
  title: string;
  description: string;
  progress: number;
}

export function ProgressCard3D(props: ProgressCard3DProps) {
  const { title, description, progress } = props;
  return (
    <div className="relative mb-12">
      <Card>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" className="text-gray-400">
            {description}
          </Typography>

          <Typography variant="h6" mt={3}>
            {progress}%
          </Typography>
          <LinearProgress value={progress} className="rounded-lg !h-3 !bg-gray-400"></LinearProgress>
        </CardContent>
      </Card>
      <Card className="h-20 -z-20 absolute -bottom-3 left-3 right-3"></Card>
      <Card className="h-20 -z-30 absolute -bottom-6 left-6 right-6"></Card>
    </div>
  );
}

export default ProgressCard3D;
