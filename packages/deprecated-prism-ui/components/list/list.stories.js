import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object } from '@storybook/addon-knobs';
import List from './List';
import ListNotes from './list-notes.md';

storiesOf('List', module)
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <List
        menu={object('show menu', [
          { label: 'Print', onClick: console.log('print') },
          { label: 'Resend', onClick: console.log('resend') },
          { label: 'Duplicate', onClick: console.log('duplicate') },
          { label: 'Remove', onClick: console.log('remove') },
        ])}
        listItems={object('List items', [
          {
            content: `Roommate: My thesaurus is missing. I think someone stole it.

  Me: Egads! I am simply crestfallen, and I am aghast at the speculation of this larceny.`,
            age: '27 m ago',
          },
          {
            content: 'Did you know: L.L.Bean is Spanish for “the the bean.“',
            age: 'the distant future',
          },
        ])}
      />
    ),
    {
      notes: {
        markdown: ListNotes,
      },
    },
  );
