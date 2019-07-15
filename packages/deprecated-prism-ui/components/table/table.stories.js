import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  array,
  object,
  boolean,
} from '@storybook/addon-knobs';
import Table from './Table';

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add('default', () => <Table />)
  .add('knobs', () => (
    <Table
      actions={array('Actions', [
        object('Table action', {
          label: text(
            'Action label',
            'This is my label. There are many like it, but this one is mine.',
          ),
          primary: boolean('Primary', true),
        }),
      ])}
      box={boolean('Box', false)}
      columns={array('Columns', [
        object('Column object', {
          label: text('Column label', 'I have been labelled!'),
          key: text('Column key', '🔑'),
        }),
      ])}
      data={array('Data', [
        object('Data object', {
          [text('key', '🔑')]: text('Data', 'I am a representation of data'),
        }),
      ])}
      title={text('Title', 'I am very useful for titling things')}
    />
  ));
