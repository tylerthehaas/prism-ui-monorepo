import { configure, addDecorator, addParameters } from '@storybook/react';
import { DocsPage, DocsContainer } from '@storybook/addon-docs';
import { withInfo } from '@storybook/addon-info'
import { withA11y } from '@storybook/addon-a11y';

import theme from './theme';

if (process.env.NODE_ENV !== 'test') {
  addDecorator(withInfo);
}

addDecorator(withA11y);
addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  },
  options: {
    theme: theme,
  },
  info: {
    inline: true,
    maxPropArrayLength: 10,
    maxPropObjectKeys: 10
  }
});

configure(require.context('../components', true, /\.stories\.(js|mdx)$/), module);
