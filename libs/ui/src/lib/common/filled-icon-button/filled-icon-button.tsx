import styled from '@emotion/styled';
import { IconButton, IconButtonProps } from '@mui/material';
import { CustomColors } from '@react-full-stack/models';

/* eslint-disable-next-line */
export interface FilledIconButtonProps extends Omit<IconButtonProps, 'color'> {
  backgroundColor?: CustomColors;
}

const StyledIconButton = styled(IconButton)<FilledIconButtonProps>((props) => ({
  backgroundColor: props.theme.palette[props.backgroundColor || 'primary'].main,
  '&:hover': {
    backgroundColor: props.theme.palette[props.backgroundColor || 'primary'].dark,
  },
}));

const defaultProps: FilledIconButtonProps = {
  backgroundColor: 'primary',
};

export function FilledIconButton(props: FilledIconButtonProps) {
  const { children, className, ...other } = props;
  return (
    <StyledIconButton color="neutral" {...other} className={`!rounded-xl ${className}`}>
      {children}
    </StyledIconButton>
  );
}

FilledIconButton.defaultProps = defaultProps;

export default FilledIconButton;
