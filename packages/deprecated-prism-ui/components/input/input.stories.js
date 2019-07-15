import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import Input from './Input';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('default', () => <Input />)
  .add('invalid', () => <Input invalid />)
  .add('disabled', () => <Input disabled />)
  .add('placeHolderText', () => <Input placeholderText="i hold text" />)
  .add('required', () => <Input required />)
  .add('knobs', () => (
    <Input
      disabled={boolean('Disabled', false)}
      errorText={text('Error text', 'frist of all how dare u')}
      icon={object('Icon', {
        name: text('Icon name', 'eye'),
        onClick: () => {},
        position: text('Icon position', 'leading'),
      })}
      label={text('Label', `check me out, i’m a label`)}
      placeholderText={text(
        'Placeholder Text',
        'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.',
      )}
      required={boolean('Required', false)}
    />
  ));
