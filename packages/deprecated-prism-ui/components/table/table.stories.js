import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, object, boolean } from '@storybook/addon-knobs';
import Table from './Table';

storiesOf('Table', module)
  .addDecorator(withKnobs)
  .add('default', () => <Table />)
  .add('knobs', () => (
    <Table
      actions={object('Actions', [
        {
          label: 'Action 1',
          primary: true,
          onClick: () => alert('Clicked Action 1 button'),
        },
        {
          label: 'Action 2',
          primary: false,
          onClick: () => alert('Clicked Action 2 button'),
        },
      ])}
      box={boolean('Box', false)}
      columns={object('Columns', [
        {
          label: 'Column 1 Label',
          key: 'col1',
        },
        {
          label: 'Column 2 Label',
          key: 'col2',
        },
        {
          label: 'Column 3 Label',
          key: 'col3',
        },
      ])}
      data={object('Data', [
        {
          col1: 'Some data',
          col2: 'Stuff',
          col3: 'Blah',
        },
        {
          col1: 'More data',
          col2: 'Something',
          col3: 'abcdefg',
        },
        {
          col1: 'Mary had a little lamb',
          col2: 'Whose fleece was white as snow',
          col3: 'And everywhere that Mary went, the lamb was sure to go',
        },
      ])}
      title={text('Title', 'Name of the Table')}
    />
  ));
