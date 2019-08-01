import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import Toggle from './Toggle';

storiesOf('Toggle', module)
  .addDecorator(withKnobs)
  .add('default', () => <Toggle />)
  .add('knobs', () => (
    <Toggle
      defaultToggle={boolean('Default toggle', true)}
      label={text('Label', 'Label for the toggle')}
      clientColor={text('Client color', '7942dd')}
    />
  ));
