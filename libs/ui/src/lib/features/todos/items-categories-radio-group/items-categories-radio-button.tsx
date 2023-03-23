import { CustomColors } from '@react-full-stack/models';
import { forwardRef } from 'react';

interface ItemsCategoriesRadioButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  checked: boolean;
  color: CustomColors;
}

export const ItemsCategoriesRadioButton = forwardRef<HTMLButtonElement, ItemsCategoriesRadioButtonProps>(
  ({ icon, children, checked, color }, ref) => {
    const iconContainer = <span className={`text-${color}`}>{icon}</span>;
    const dot = <div className={`w-2 h-2 rounded-full bg-${color}`}></div>;
    return (
      <button
        ref={ref}
        className={`${
          checked ? 'bg-' + color : 'bg-transparent text-light'
        } flex items-center gap-2 py-2 px-4 rounded-sm transition-all`}
      >
        {checked && iconContainer}
        {!checked && dot} {children}
      </button>
    );
  }
);
