import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import Radio from './Radio';

storiesOf('Radio', module)
  .addDecorator(withKnobs)
  .add('knobs', () => (
    <Radio
      buttons={[
        object('Option object 1', {
          text: text('Option 1', 'Option 1'),
          checked: boolean('checked', true),
        }),
        object('Option object 2', {
          text: text('Option 2', 'Option 2'),
          checked: boolean('checked', false),
        }),
      ]}
      name={text('name', 'Radio name')}
    />
  ));
