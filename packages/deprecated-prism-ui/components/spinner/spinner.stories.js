import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Spinner from './Spinner';

storiesOf('Spinner', module)
  .addParameters({ component: Spinner })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Spinner
      size={select('Size', ['xs', 'sm', 'md', 'lg', 'xl'], 'lg')}
      data-testid={text('test id', 'test id')}
    />
  ));
