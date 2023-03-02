import styled from '@emotion/styled';
import { LinearProgress, Typography } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

/* eslint-disable-next-line */
export interface ProgressCard3DProps {
  title: string;
  description: string;
  progress: number;
}

const StyledCard = styled(Card)((props) => ({
  backgroundColor: props.theme.palette.primary.main,
  color: props.theme.palette.primary.contrastText,
  borderRadius: '1.6rem',
  boxShadow: props.theme.shadows[3],
}));

export function ProgressCard3D(props: ProgressCard3DProps) {
  const { title, description, progress } = props;
  return (
    <div className="relative mb-12">
      <StyledCard>
        <CardContent>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="body2" className="text-gray-400">
            {description}
          </Typography>

          <Typography variant="h6" mt={3}>
            {progress}%
          </Typography>
          <LinearProgress
            value={progress}
            variant="determinate"
            color="secondary"
            className="rounded-lg !h-3 !bg-gray-400"
          ></LinearProgress>
        </CardContent>
      </StyledCard>
      <StyledCard className="h-20 -z-20 absolute -bottom-6 left-6 right-6"></StyledCard>
      <StyledCard className="h-20 -z-30 absolute -bottom-12 left-12 right-12"></StyledCard>
      {/* <StyledCard></StyledCard> */}
    </div>
  );
}

export default ProgressCard3D;
