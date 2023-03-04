import styled from '@emotion/styled';
import MuiCard, { CardProps as MuiCardProps } from '@mui/material/Card';

/* eslint-disable-next-line */
export interface CardProps extends MuiCardProps {}

const defaultProps: CardProps = {
  elevation: 3,
};

const StyledCard = styled(MuiCard)<MuiCardProps>((props) => ({
  backgroundColor: props.theme.palette.primary.main,
  color: props.theme.palette.primary.contrastText,
  borderRadius: '1rem',
}));

export function Card(props: CardProps) {
  const { children, elevation, ...other } = props;
  return <StyledCard {...other}>{children}</StyledCard>;
}

Card.defaultProps = defaultProps;

export default Card;
