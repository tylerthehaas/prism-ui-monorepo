import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Toggle from './Toggle';

storiesOf('Toggle', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <Toggle
      defaultToggle={boolean('Default toggle', true)}
      label={text('Label', 'Label for the toggle')}
      color={text('Color', '7942dd')}
    />
  ));
