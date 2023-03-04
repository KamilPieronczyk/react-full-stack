import { render } from '@testing-library/react';

import ProgressCard from './progress-card';

describe('ProgressCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ProgressCard />);
    expect(baseElement).toBeTruthy();
  });
});
