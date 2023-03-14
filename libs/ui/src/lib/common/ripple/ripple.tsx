import { useRef } from 'react';
import styles from './ripple.module.css';
/* eslint-disable-next-line */
export interface RippleProps {
  children?: React.ReactNode;
}

export function Ripple(props: RippleProps) {
  const rippleContainer = useRef<HTMLDivElement>(null);

  function onButtonClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const targetWidth = event.currentTarget.offsetWidth;
    const targetHeight = event.currentTarget.offsetHeight;
    const rippleSize = Math.max(targetWidth, targetHeight) * 2.5;
    const radius = rippleSize / 2;
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    const ripple = document.createElement('span');
    ripple.classList.add(styles['ripple']);

    if (rippleContainer.current) {
      ripple.style.top = `${y - radius}px`;
      ripple.style.left = `${x - radius}px`;
      ripple.style.width = `${rippleSize}px`;
      rippleContainer.current.appendChild(ripple);
    }

    setTimeout(() => {
      if (rippleContainer.current) {
        ripple.remove();
      }
    }, 700);
  }

  return (
    <div className="relative overflow-hidden" ref={rippleContainer} onClick={onButtonClick}>
      {props.children}
    </div>
  );
}

export default Ripple;
