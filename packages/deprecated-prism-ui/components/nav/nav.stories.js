import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, object, boolean } from '@storybook/addon-knobs';
import Nav from './Nav';
import NavNotes from './nav-notes.md';

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <Nav
        horizontal={boolean('Horizontal?', false)}
        tabs={object('Tab object', [
          {
            tabName:
              'THIS IS NOT A DRILL. I REPEAT, THIS IS NOT A DRILL. Aaaand that concludes your training. Welcome to Home Depot',
            numErrors: 11,
            active: true,
          },
          {
            tabName:
              'ME: It`s actually a single Star War composed of several Star Battles. FRIEND: Are you wearing 2 monocles',
            active: false,
          },
          {
            tabName:
              'The ocean is home to many of the earth’s wettest animals',
            active: false,
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
