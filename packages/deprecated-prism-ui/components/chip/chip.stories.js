import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Chip from './Chip';

storiesOf('Chip', module)
  .addDecorator(withKnobs)
  .add('default', () => <Chip />)
  .add('labelled', () => (
    <Chip label="Sick of having to go to 2 different huts to buy pizza & sunglasses." />
  ))
  .add('selected', () => <Chip isSelected />)
  .add('knobs', () => (
    <Chip
      label={text(
        'Label',
        `The worst part about being a giraffe is having a lot of time to think about your mistakes when you’re sinking into quicksand`,
      )}
    />
  ));
