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

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add('default', () => <Nav />)
  .add('tabs', () => (
    <Nav
      tabs={[
        {
          tabName: 'the first tab',
          onClick: () => alert('you have clicked the first tab'),
          numErrors: 1,
          isNew: true,
        },
      ]}
    />
  ))
  .add('active', () => (
    <Nav
      active={1}
      tabs={[
        {
          tabName: 'the first tab',
          onClick: () => console.log('you have clicked the first tab'),
          numErrors: 1,
          isNew: true,
        },
        {
          tabName: 'the second tab',
        },
      ]}
    />
  ))
  .add('navigate', () => (
    <Nav
      navigate={(event, index, value) => {
        console.log(`event: ${event} index: ${index} value: ${value}`);
      }}
      tabs={[
        {
          tabName: 'the first tab',
          onClick: () => console.log('you have clicked the first tab'),
          numErrors: 1,
          isNew: true,
        },
        {
          tabName: 'the second tab',
        },
      ]}
    />
  ))
  .add('knobs', () => (
    <Nav
      active={number('Active', 0)}
      tabs={[
        object('Tab object', {
          tabName: text('Tab', 'i am a tab'),
          numErrors: number('Number of errors', 50000),
          isNew: boolean('Is new', true),
        }),
      ]}
    />
  ));
