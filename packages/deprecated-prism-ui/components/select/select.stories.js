import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object } from '@storybook/addon-knobs';
import Select from './Select';
import SelectNotes from './select-notes.md';

storiesOf('Select', module)
  .addParameters({ component: Select })
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <Select
        className={text('class name', 'class name')}
        content={object('content object', [
          {
            text:
              'she was looking quite foreboding with ancient jewels exploding in the shape of a sword on her thorax / well the years start coming and they',
            value: 1,
          },
          {
            text:
              'Guess who‘s got 7 thumbs and a a set of keys to a cadaver lab?',
            value: 2,
          },
          {
            text: 'Every theater is a drive in theater if you‘re badass enough',
            value: 3,
          },
          {
            text:
              'hi kids thanks for having me for career day. much like *gestures at cop* fighting crime I as well face many dangers at the shampoo factory',
            value: 4,
          },
        ])}
        data-testid={text('DataTestId', '123')}
        selectLabel={text('SelectLabel', 'Select Label')}
      />
    ),
    {
      notes: {
        markdown: SelectNotes,
      },
    },
  );
