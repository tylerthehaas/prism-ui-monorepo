import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Spinner from './Spinner';

storiesOf('Spinner', module)
  .addParameters({ component: Spinner })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Spinner
      className={text('class name', 'class name')}
      data-testid={text('test id', 'test id')}
      size={select('Size', ['xs', 'sm', 'md', 'lg', 'xl'], 'lg')}
    />
  ));
