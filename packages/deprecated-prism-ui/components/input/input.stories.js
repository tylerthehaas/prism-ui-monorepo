import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import Input from './Input';

storiesOf('Input', module)
  .addParameters({ component: Input })
  .addDecorator(withKnobs)
  .add('leading', () => (
    <Input
      className={text('class name', 'class name')}
      disabled={boolean('Disabled', false)}
      errorText={text('Error text', 'frist of all how dare u')}
      icon={object('Icon', {
        name: 'eye',
        position: 'leading',
      })}
      infoText={text(
        'info text',
        'according to studies, one of the best ways to save the planet is kissing it. `it likes that` say scientists',
      )}
      invalid={boolean('invalid', false)}
      label={text('Label', 'check me out, i`m a label')}
      placeholderText={text(
        'Placeholder Text',
        'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.',
      )}
      prefilledValue={text('Prefilled value', '')}
      required={boolean('Required', false)}
    />
  ))
  .add('trailing', () => (
    <Input
      prefilledValue={text('Prefilled value', '')}
      disabled={boolean('Disabled', false)}
      errorText={text('Error text', 'frist of all how dare u')}
      icon={object('Icon', {
        name: 'eye',
        position: 'trailing',
      })}
      infoText={text(
        'info text',
        'according to studies, one of the best ways to save the planet is kissing it. `it likes that` say scientists',
      )}
      invalid={boolean('invalid', false)}
      label={text('Label', 'check me out, i`m a label')}
      placeholderText={text(
        'Placeholder Text',
        'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.',
      )}
      required={boolean('Required', false)}
    />
  ));
