import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import Nav from './Nav';
import NavNotes from './nav-notes.md';

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <Nav
        tabs={object('Tab object', [
          {
            tabName: 'i am a tab',
            numErrors: 11,
            isNew: true,
            active: true,
          },
        ])}
      />
    ),
    {
      notes: {
        markdown: NavNotes,
      },
    },
  );
