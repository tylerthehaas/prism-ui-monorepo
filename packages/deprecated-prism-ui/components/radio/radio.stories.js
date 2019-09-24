import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import Radio from './Radio';
import RadioNotes from './radio-notes.md';

storiesOf('Radio', module)
  .addParameters({ component: Radio })
  .addDecorator(withKnobs)
  .add(
    'knobs',
    () => (
      <Radio
        buttons={object('Option object', [
          {
            text: 'Option 1',
          },
          {
            text: 'Option 2',
            onClick: () => console.log('I have been clicked'),
          },
        ])}
        name={text('name', 'Radio name')}
      />
    ),
    {
      notes: {
        markdown: RadioNotes,
      },
    },
  );
