import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import Dropdown from './Dropdown';

storiesOf('Dropdown', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <Dropdown
      disabled={boolean('Disabled', false)}
      dropdownMenu={
        ('Dropdown menu',
        object('Dropdown menu', [
          {
            label:
              'Some interesting facts I learned at the children‘s museum, lightning bugs are actually beetles and I hate children.',
          },
          {
            label:
              'Every time a bell rings an angel gets its wings. It‘s always the same angel. It‘s covered in wings now and wants to die but can‘t',
          },
          {
            label: '“Um“ - 1st horse that got ridden',
          },
        ]))
      }
      label={text(
        'Label text',
        '[Down with the Sickness plays as I continue to push a pull door]',
      )}
    />
  ));
