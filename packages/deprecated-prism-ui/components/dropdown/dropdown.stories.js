import React from 'react';
import { storiesOf } from '@storybook/react';
import {
 withKnobs, text, boolean, object,
} from '@storybook/addon-knobs';
import Dropdown from './Dropdown';

const defaultDropdown = [
  {
    label: 'Menu Item',
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log('Menu Item Clicked');
    },
  },
  {
    label: 'Menu Item',
    onClick: () => {
    // eslint-disable-next-line no-console
     console.log('Menu Item Clicked');
    },
  },
  {
    label: 'Menu Item',
    onClick: () => {
      // eslint-disable-next-line no-console
      console.log('Menu Item Clicked');
    },
  },
];

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('default', () => <Dropdown dropdownMenu={defaultDropdown} />)
  .add('primary', () => <Dropdown primary dropdown={defaultDropdown} />)
  .add('disabled', () => <Dropdown disabled />)
  .add('label', () => (
    <Dropdown
      label={'waiter, there\'s a reflection of a sad and lonely man in my soup'}
    />
  ))
  .add('knobs', () => (
    <Dropdown
      disabled={boolean('Disabled', false)}
      dropdownMenu={
        ('Dropdown menu',
        [
          object('Dropdown menu item', {
            label: text(
              'Dropdown item',
              'Some interesting facts I learned at the children\'s museum, lightning bugs are actually beetles and I hate children.',
            ),
          }),
        ])
      }
      label={text(
        'Label text',
        '[Down with the Sickness plays as I continue to push a pull door]',
      )}
    />
  ));
