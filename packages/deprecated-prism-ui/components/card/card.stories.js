/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Card from './Card';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('small shadow', () => (
    <Card>Pick up artists and garbage men should switch names</Card>
  ))
  .add('medium shadow', () => (
    <Card shadowType="md">
      Every time a bell rings an angel gets its wings. It's always the same
      angel. It's covered in wings now and wants to die but can't
    </Card>
  ))
  .add('large shadow', () => (
    <Card shadowType="lg">"Um" – 1st horse that got ridden</Card>
  ))
  .add('knobs', () => (
    <Card shadowType={text('Shadow type', 'sm')}>
      {text(
        'Card text',
        'CrossFit is just Fight Club if the first two rules were the opposite.',
      )}
    </Card>
  ));
