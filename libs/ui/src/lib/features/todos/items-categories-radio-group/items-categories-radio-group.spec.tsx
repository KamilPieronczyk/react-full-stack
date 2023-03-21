import { render } from '@testing-library/react';

import ItemsCategoriesRadioGroup from './items-categories-radio-group';

describe('ItemsCategoriesRadioGroup', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemsCategoriesRadioGroup />);
    expect(baseElement).toBeTruthy();
  });
});
