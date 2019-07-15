import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  array,
  boolean,
  object,
} from '@storybook/addon-knobs';
import Dropdown from './Dropdown';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('default', () => <Dropdown />)
  .add('primary', () => <Dropdown primary />)
  .add('disabled', () => <Dropdown disabled />)
  .add('label', () => (
    <Dropdown
      label={`waiter, there's a reflection of a sad and lonely man in my soup`}
    />
  ))
  .add('show menu', () => <Dropdown showMenu />)
  .add('knobs', () => (
    <Dropdown
      disabled={boolean('Disabled', false)}
      dropdownMenu={array('Dropdown menu', [
        object('Dropdown menu item', {
          label: text(
            'Dropdown item',
            `Some interesting facts I learned at the children's museum, lightning bugs are actually beetles and I hate children.`,
          ),
        }),
      ])}
      label={text(
        'Label text',
        '[Down with the Sickness plays as I continue to push a pull door]',
      )}
    />
  ));
