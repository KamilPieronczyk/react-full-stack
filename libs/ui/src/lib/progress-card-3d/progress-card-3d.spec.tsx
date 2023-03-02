import { render } from '@testing-library/react';

import { ThemeProvider } from '@emotion/react';
import { darkTheme } from '../theme';
import ProgressCard3D from './progress-card-3d';

describe('ProgressCard3D', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <ThemeProvider theme={darkTheme}>
        <ProgressCard3D title="" description="" progress={0} />
      </ThemeProvider>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should render successfully with title', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <ProgressCard3D title="title" description="" progress={0} />
      </ThemeProvider>
    );
    expect(getByText('title')).toBeTruthy();
  });

  it('should render successfully with description', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <ProgressCard3D title="" description="description" progress={0} />
      </ThemeProvider>
    );
    expect(getByText('description')).toBeTruthy();
  });

  it('should render successfully with progress', () => {
    const { getByText } = render(
      <ThemeProvider theme={darkTheme}>
        <ProgressCard3D title="" description="" progress={50} />
      </ThemeProvider>
    );
    expect(getByText('50%')).toBeTruthy();
  });
});
