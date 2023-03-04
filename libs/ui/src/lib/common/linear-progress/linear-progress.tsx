import MuiLinearProgress, { LinearProgressProps as MuiLinearProgressProps } from '@mui/material/LinearProgress';

/* eslint-disable-next-line */
export interface LinearProgressProps extends MuiLinearProgressProps {}

const defaultProps: LinearProgressProps = {
  value: 0,
  variant: 'determinate',
  color: 'secondary',
};

export function LinearProgress(props: LinearProgressProps) {
  const { className, ...other } = props;
  return <MuiLinearProgress {...other} className={`rounded-lg !h-2 !bg-gray-400 ${className}`}></MuiLinearProgress>;
}

LinearProgress.defaultProps = defaultProps;

export default LinearProgress;
