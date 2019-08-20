import { configure, addDecorator, addParameters } from '@storybook/react';
import requireContext from 'require-context.macro';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

import theme from './theme';

if (process.env.NODE_ENV !== 'test') {
  addDecorator(withInfo);
}
addDecorator(withA11y);
addParameters({
  info: {
    inline: true,
    maxPropArrayLength: 10,
    maxPropObjectKeys: 10,
  },
  options: {
    theme: theme,
  },
});

function loadStories() {
  const req = requireContext('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(withA11y);
