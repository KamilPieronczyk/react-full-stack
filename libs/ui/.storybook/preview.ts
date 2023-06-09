import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import './css/reset.css';
import './css/tailwind.css';

import { withTheme } from './withTheme.decorator';

export const decorators = [withTheme];

export const parameters = {
  backgrounds: {
    default: 'dark',
    values: [
      {
        name: 'dark',
        value: '#191e29',
      },
    ],
  },
  viewport: {
    defaultViewport: 'mobile2',
  },
};
