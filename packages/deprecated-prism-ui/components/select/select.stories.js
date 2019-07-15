import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  object,
  boolean,
  number,
} from '@storybook/addon-knobs';
import Select from './Select';

storiesOf('Select', module)
  .addDecorator(withKnobs)
  .add('default', () => <Select />)
  .add('knobs', () => (
    <Select
      content={[
        object('content object', {
          text: text(
            'content',
            'would love to hear some longer ditties about Jack and Diane',
          ),
          value: number('content value', 1),
        }),
      ]}
      dropdown={boolean('Dropdown', false)}
      radio={boolean('Radio', true)}
    />
  ));
