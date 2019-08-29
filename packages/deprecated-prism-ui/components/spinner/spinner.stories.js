import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, text } from '@storybook/addon-knobs';
import Spinner from './Spinner';
import SpinnerNotes from './spinner-notes.md';

storiesOf('Spinner', module)
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <Spinner
        size={select('Size', ['xs', 'sm', 'md', 'lg', 'xl'], 'lg')}
        data-testid={text('test id', 'test id')}
      />
    ),
    {
      notes: {
        markdown: SpinnerNotes,
      },
    },
  );
