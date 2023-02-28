import styled from '@emotion/styled';
import MuiButton, { ButtonProps as MuiButtonProps } from '@mui/material/Button';

interface ButtonProps extends Omit<MuiButtonProps, 'color'> {
  color?: MuiButtonProps['color'] | 'text';
}

const defaultProps: ButtonProps = {
  color: 'primary',
  variant: 'contained',
  size: 'medium',
};

const StyledMuiButton = styled(MuiButton)<ButtonProps>({
  borderRadius: 999,
  paddingInline: '3ch',
});

const WhiteTextButton = styled(StyledMuiButton)(({ theme }) => ({
  color: theme.palette.text.primary,
  borderColor: theme.palette.text.primary,
  backgroundColor: 'transparent',
  '&:hover': {
    borderColor: theme.palette.text.primary,
  },
}));

export const Button = (props: ButtonProps) => {
  const { children, ...other } = props;
  if (props.color === 'text')
    return (
      <WhiteTextButton {...other} color={undefined}>
        {children}
      </WhiteTextButton>
    );

  const color: MuiButtonProps['color'] = other.color as MuiButtonProps['color'];
  return (
    <StyledMuiButton {...other} color={color}>
      {children}
    </StyledMuiButton>
  );
};

Button.defaultProps = defaultProps;
