import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withA11y } from '@storybook/addon-a11y';

addDecorator(withInfo);
addDecorator(withA11y);
addParameters({
  info: {
    inline: true,
    maxPropArrayLength: 10,
    maxPropObjectKeys: 10,
  },
});

function loadStories() {
  const req = require.context('../components', true, /\.stories\.js$/);
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);

addDecorator(withA11y);
