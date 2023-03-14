import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { CardActionArea, Typography } from '@mui/material';
import { CustomColors } from '@react-full-stack/models';
import { useEffect, useState } from 'react';
import { Card, FilledIconButton } from '../../../common';
import styles from './todo-item.module.css';

export interface TodoItemProps {
  iconNode: React.ReactNode;
  color: CustomColors;
  name: string;
  completed?: boolean;
  onCheckChange?: (checked: boolean) => void;
}

export function TodoItem({ iconNode, color, name, completed: completedProps = false, onCheckChange }: TodoItemProps) {
  const [checked, setChecked] = useState(completedProps);
  const [touched, setTouched] = useState(false);

  useEffect(() => {
    setChecked(completedProps);
  }, [completedProps]);

  const handleCheck = () => {
    setChecked((prev) => {
      onCheckChange && onCheckChange(!prev);
      return !prev;
    });
    setTouched(true);
  };

  return (
    <Card className={` ${checked ? styles['card--checked'] : ''} ${touched ? styles['card--touched'] : ''}`}>
      <CardActionArea>
        <div className="flex items-center p-4 gap-4" onClick={handleCheck}>
          <FilledIconButton disableFocusRipple disableRipple disableTouchRipple backgroundColor={color}>
            {iconNode}
          </FilledIconButton>
          <Typography variant="h6" color="text" className="flex-1">
            {name}
          </Typography>
          <div className={styles['icon__container']}>
            <CheckBoxOutlinedIcon
              fontSize="large"
              color="secondary"
              className={`cursor-pointer ${styles['icon--checked']}`}
            />
            <ArrowForwardIosIcon fontSize="small" className={`cursor-pointer ${styles['icon--unchecked']}`} />
          </div>
        </div>
      </CardActionArea>
    </Card>
  );
}

export default TodoItem;
