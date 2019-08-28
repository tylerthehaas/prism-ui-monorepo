import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, array, number, select } from '@storybook/addon-knobs';
import Rollover from './Rollover';

storiesOf('Rollover', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <Rollover
      content={array('Rollover content', [
        'John Smith',
        'Jane Smith',
        'John Doe',
        'Jane Doe',
      ])}
      hoverText={text('Hover text', 'Hover over me!')}
      hoverTextStyle={select(
        'Hover text style',
        ['dotted', 'none', 'underlined'],
        'dotted',
      )}
      numShown={number('number shown', 2)}
      position={select('position', ['up', 'down'], 'up')}
    />
  ));
