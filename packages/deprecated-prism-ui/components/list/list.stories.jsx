import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
import List from './List';
import ListNotes from './list-notes.md';

storiesOf('List', module)
  .addParameters({ component: List })
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <List
        className={text('class name', 'class name')}
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
        menu={object('show menu', [
          { label: 'Print', onClick: console.log('print') },
          { label: 'Resend', onClick: console.log('resend') },
          { label: 'Duplicate', onClick: console.log('duplicate') },
          { label: 'Remove', onClick: console.log('remove') },
        ])}
      />
    ),
    {
      notes: {
        markdown: ListNotes,
      },
    },
  );
