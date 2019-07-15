import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import Slider from './slider';

storiesOf('Slider', module)
  .addDecorator(withKnobs)
  .add('default', () => <Slider />)
  .add('knobs', () => (
    <Slider
      defaultValue={number('Default value', 1)}
      maxValue={number('Max value', 100)}
      minValue={number('Minimum value', 1)}
      stepValue={number('Step value', 1)}
    />
  ));
