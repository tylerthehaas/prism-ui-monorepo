import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  object,
  number,
} from '@storybook/addon-knobs';
import Nav from './Nav';
import NavNotes from './nav-notes.md';

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add('component', () => <Nav
    tabs={
        object('Tab object', [{
          tabName: text('Tab', 'i am a tab'),
          numErrors: number('Number of errors', 50000),
          isNew: boolean('Is new', true),
          active: boolean('Active', true),
        }])
    }
  />,
    {
      notes: {
        markdown: NavNotes,
      },
    });
