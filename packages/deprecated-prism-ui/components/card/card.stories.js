/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Card from './Card';

storiesOf('Card', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <Card shadowType={select('Shadow Type', ['sm', 'md', 'lg'], 'sm')}>
      {text('Card text', 'Pick up artists and garbage men should switch names')}
    </Card>
  ));
