import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  boolean,
  object,
  select,
} from '@storybook/addon-knobs';
import Dropdown from './Dropdown';
import DropdownNotes from './dropdown-notes.md';
import Avatar from '../avatar/Avatar'

const dropdownMenu = ('Dropdown menu',
  object('Dropdown menu', [
    {
      label:
        'Some interesting facts I learned at the children‘s museum, lightning bugs are actually beetles and I hate children.',
      onClick: () => console.log('this was clicked'),
    },
    {
      label:
        'Every time a bell rings an angel gets its wings. It‘s always the same angel. It‘s covered in wings now and wants to die but can‘t',
    },
    {
      label: '“Um“ - 1st horse that got ridden',
    },
  ]))


storiesOf('Dropdown', module)
  .addParameters({ component: Dropdown })
  .addDecorator(withKnobs)
  .add(
    'default',
    () => (
      <Dropdown
        className={text('class name', 'class name')}
        disabled={boolean('Disabled', false)}
        dualAction={boolean('Dual action', false)}
        dropdownMenu={dropdownMenu}
        label={text(
          'Label text',
          '[Down with the Sickness plays as I continue to push a pull door]',
        )}
        style={select(
          'Dropdown style',
          ['primary', 'text', 'menu', 'normal'],
          'primary',
        )}
      />
    ),
    {
      notes: {
        markdown: DropdownNotes,
      },
    },
  )
  .add(
    'with children', () => (
      <Dropdown
        className={text('class name', 'class name')}
        disabled={boolean('Disabled', false)}
        dualAction={boolean('Dual action', false)}
        dropdownMenu={dropdownMenu}
        label={text(
          'Label text',
          '[Down with the Sickness plays as I continue to push a pull door]',
        )}
        style={select(
          'Dropdown style',
          ['primary', 'text', 'normal'],
          'primary',
        )}
      ><Avatar /></Dropdown>
    )
  )
