import { render } from '@testing-library/react';

import FilledIconButton from './filled-icon-button';

describe('FilledIconButton', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FilledIconButton />);
    expect(baseElement).toBeTruthy();
  });
});
