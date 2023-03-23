import { RadioGroup } from '@headlessui/react';
import { CategoryType, CATEGORY_ENTRIES, CATEGORY_NAMES, IToDoCategory } from '@react-full-stack/models';
import { useState } from 'react';
import 'ts-array-extensions';
import CategoryIcon from '../../../common/category-icon/category-icon';
import { ItemsCategoriesRadioButton } from './items-categories-radio-button';

export interface ItemsCategoriesRadioGroupProps {
  onChange: (category: CategoryType) => void;
  init?: CategoryType;
}

export function ItemsCategoriesRadioGroup({ onChange, init }: ItemsCategoriesRadioGroupProps) {
  const [current, setCurrent] = useState(init ?? CATEGORY_NAMES.first());

  const handleOnChange = (category: CategoryType) => {
    setCurrent(category);
    onChange(category);
  };

  return (
    <RadioGroup value={current} onChange={handleOnChange}>
      <div className="flex gap-4 flex-wrap">
        <Categories />
      </div>
    </RadioGroup>
  );
}

export default ItemsCategoriesRadioGroup;

function Categories() {
  return (
    <>
      {CATEGORY_ENTRIES.map(({ key, category }) => (
        <RadioGroupOption id={key} category={category}></RadioGroupOption>
      ))}
    </>
  );
}

function RadioGroupOption({ id, category }: { id: CategoryType; category: IToDoCategory }): JSX.Element {
  return (
    <RadioGroup.Option value={id}>
      {({ checked }) => (
        <ItemsCategoriesRadioButton icon={<CategoryIcon name={id} />} checked={checked} color={category.color}>
          {category.name}
        </ItemsCategoriesRadioButton>
      )}
    </RadioGroup.Option>
  );
}
