import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, number } from '@storybook/addon-knobs';
import Rollover from './Rollover';

storiesOf('Rollover', module)
  .addDecorator(withKnobs)
  .add('default', () => <Rollover />)
  .add('knobs', () => (
    <Rollover
      content={array('Rollover content', [
        'John Smith',
        'Jane Smith',
        'John Doe',
        'Jane Doe',
      ])}
      hoverText={text('Hover text', 'Hover over me!')}
      hoverTextStyle={text('Hover text style', 'dotted')}
      numShown={number('number shown', 2)}
      position={text('position', 'up')}
    />
  ));
