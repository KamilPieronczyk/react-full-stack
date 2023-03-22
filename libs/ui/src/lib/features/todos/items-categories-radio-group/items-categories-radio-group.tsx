import { RadioGroup } from '@headlessui/react';
import { CATEGORY_ENTRIES, CATEGORY_NAMES, CustomColors } from '@react-full-stack/models';
import { forwardRef, useState } from 'react';
import 'ts-array-extensions';
import CategoryIcon from '../../../common/category-icon/category-icon';

interface ItemsCategoriesRadioButtonProps {
  icon: React.ReactNode;
  children: React.ReactNode;
  checked: boolean;
  color: CustomColors;
}

const ItemsCategoriesRadioButton = forwardRef<HTMLButtonElement, ItemsCategoriesRadioButtonProps>(
  ({ icon, children, checked, color }, ref) => {
    return (
      <button
        ref={ref}
        className={`${
          checked ? 'bg-' + color : 'bg-transparent text-light'
        } flex items-center gap-2 py-2 px-4 rounded-sm transition-all`}
      >
        <span className={`text-${color}`}>{checked && icon}</span>{' '}
        {!checked && <div className={`w-2 h-2 rounded-full bg-${color}`}></div>} {children}
      </button>
    );
  }
);

/* eslint-disable-next-line */
export interface ItemsCategoriesRadioGroupProps {}

export function ItemsCategoriesRadioGroup(props: ItemsCategoriesRadioGroupProps) {
  const [current, setCurrent] = useState(CATEGORY_NAMES.first());
  return (
    <RadioGroup value={current} onChange={setCurrent}>
      <div className="flex gap-4 flex-wrap">
        {CATEGORY_ENTRIES.map(({ key, category }) => (
          <RadioGroup.Option value={key}>
            {({ checked }) => (
              <ItemsCategoriesRadioButton icon={<CategoryIcon name={key} />} checked={checked} color={category.color}>
                {category.name}
              </ItemsCategoriesRadioButton>
            )}
          </RadioGroup.Option>
        ))}
      </div>
    </RadioGroup>
  );
}

export default ItemsCategoriesRadioGroup;
