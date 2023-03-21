import { render } from '@testing-library/react';

import CategoryIcon from './category-icon';

describe('CategoryIcon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CategoryIcon />);
    expect(baseElement).toBeTruthy();
  });
});
