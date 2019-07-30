import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  object,
  boolean,
  number,
  array,
} from '@storybook/addon-knobs';
import Select from './Select';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('knobs', () => (
    <Select
      data-testid={text('DataTestId', '123')}
      selectLabel={text('SelectLabel', 'Select Label')}
      content={array('Content', [
        object('content object', {
          text: text('content', 'Select Option 1'),
          value: number('content value', 1),
        }),
      ])}
      dropdown={boolean('Dropdown', false)}
      radio={boolean('Radio', true)}
    />
  ));
