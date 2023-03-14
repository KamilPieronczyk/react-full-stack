import { render } from '@testing-library/react';
import { withTheme } from './withTheme.decorator';

export const renderWithTheme = (child: JSX.Element) => render(withTheme(child));
