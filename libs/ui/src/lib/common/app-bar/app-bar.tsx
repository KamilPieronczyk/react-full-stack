import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import { Avatar, ButtonBase } from '@mui/material';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import FilledIconButton from '../filled-icon-button/filled-icon-button';

export interface AppBarProps {
  title?: string;
  onBackClick?: () => void;
  onAvatarClick?: () => void;
  avatarSrc?: string;
}

export function AppBar(props: AppBarProps) {
  const { title, onBackClick, onAvatarClick, avatarSrc } = props;
  return (
    <MuiAppBar position="static" color="transparent">
      <Toolbar>
        {onBackClick ? (
          <FilledIconButton
            edge="start"
            backgroundColor="primary"
            aria-label="back"
            sx={{ mr: 2 }}
            onClick={onBackClick}
          >
            <ArrowBackIosRoundedIcon />
          </FilledIconButton>
        ) : null}
        <Typography variant="h6" color="white" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <ButtonBase onClick={onAvatarClick} className="!rounded-full">
          <Avatar alt="Remy Sharp" src={avatarSrc} />
        </ButtonBase>
      </Toolbar>
    </MuiAppBar>
  );
}

export default AppBar;
