import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, text } from '@storybook/addon-knobs';
import Slider from './slider';

storiesOf('Slider', module)
  .addParameters({ component: Slider })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Slider
      className={text('class name', 'class name')}
      defaultValue={number('Default value', 1)}
      inputId={text('Input Id', 'non-default-input-id')}
      maxValue={number('Max value', 100)}
      minValue={number('Minimum value', 1)}
      stepValue={number('Step value', 1)}
    />
  ));
