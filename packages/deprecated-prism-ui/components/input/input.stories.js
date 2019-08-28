import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, object } from '@storybook/addon-knobs';
import Input from './Input';

storiesOf('Input', module)
  .addDecorator(withKnobs)
  .add('leading', () => (
    <Input
      disabled={boolean('Disabled', false)}
      errorText={text('Error text', 'frist of all how dare u')}
      icon={object('Icon', {
        name: 'eye',
        onClick: () => {},
        position: 'leading',
      })}
      infoText={text(
        'info text',
        'according to studies, one of the best ways to save the planet is kissing it. `it likes that` say scientists',
      )}
      label={text('Label', 'check me out, i`m a label')}
      placeholderText={text(
        'Placeholder Text',
        'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.',
      )}
      required={boolean('Required', false)}
    />
  ))
  .add('trailing', () => (
    <Input
      disabled={boolean('Disabled', false)}
      errorText={text('Error text', 'frist of all how dare u')}
      icon={object('Icon', {
        name: 'eye',
        onClick: () => {},
        position: 'trailing',
      })}
      infoText={text(
        'info text',
        'according to studies, one of the best ways to save the planet is kissing it. `it likes that` say scientists',
      )}
      label={text('Label', 'check me out, i`m a label')}
      placeholderText={text(
        'Placeholder Text',
        'Did you ever hear the tragedy of Darth Plagueis The Wise? I thought not.',
      )}
      required={boolean('Required', false)}
    />
  ));
