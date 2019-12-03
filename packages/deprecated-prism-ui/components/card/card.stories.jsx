/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, object } from '@storybook/addon-knobs';
import Card from './Card';

storiesOf('Card', module)
  .addParameters({ component: Card })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Card
      cardMenu={object('Card Menu', [
        {
          label: `The Little Rascals implies the existence of larger more terrifying rascals.`,
          onClick: console.log('you have clicked me'),
        },
        {
          label:
            '***BREAKING*** sneaky teens trying to buy booze severely misjudge their height - 300ft trenchcoat behemoth said to contain 57 people',
          onClick: console.log('i have been clicked'),
        },
      ])}
      cardTitle={text(
        'Card title',
        'Pick up artists and garbage men should switch names',
      )}
      className={text('class name', 'class name')}
      date={text('Date', 'today')}
      image="https://i.imgur.com/gTbQZhW.jpg"
      imageAlt="chainsaw dog"
      shadowType={select('Shadow Type', ['sm', 'md', 'lg'], 'sm')}
      status={text('Status', 'new')}
    >
      {text(
        'Card text',
        'i really hope we never have flying cars. imagine walking home after a bad day and a kia soul flies over u blasting party rock anthem',
      )}
    </Card>
  ));
