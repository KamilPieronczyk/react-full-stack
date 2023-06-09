import styled from '@emotion/styled';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

type ButtonProps = MuiButtonProps;

const defaultProps: ButtonProps = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};

const StyledMuiButton = styled(MuiButton)<ButtonProps>({
  borderRadius: 999,
  paddingInline: '3ch',
  textDecoration: 'none !important',
});

export const Button = (props: ButtonProps) => {
  const { children, ...other } = props;
  return <StyledMuiButton {...other}>{children}</StyledMuiButton>;
};

Button.defaultProps = defaultProps;
