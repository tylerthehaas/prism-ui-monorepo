import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Spinner from './Spinner';

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add('default', () => <Spinner />)
  .add('knobs', () => <Spinner size={text('Size', 'lg')} />);
