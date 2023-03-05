import { render } from '@testing-library/react';

import CardsGrid from './cards-grid';

describe('CardsGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardsGrid />);
    expect(baseElement).toBeTruthy();
  });
});
