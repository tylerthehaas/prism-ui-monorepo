import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import Textbox from './textbox';

storiesOf('Textbox', module)
  .addDecorator(withKnobs)
  .add('default', () => <Textbox />)
  .add('knobs', () => (
    <Textbox
      disabled={boolean('Disabled', false)}
      errorText={text('Error text', `I’m afraid I can’t do that, user`)}
      infoText={text('Info text', 'Use me to inform people of things')}
      inputLabel={text('Label', 'Use me to label things')}
      maxChars={number('Maximum character amount', 250)}
      placeholderText={text('Placeholder text', `I’m just happy to be here`)}
      required={boolean('Required', false)}
      optionalText={text('Optional Text', 'Optional')}
      characterText={text('Character Text', 'Characters')}
      textAreaId={text('Text Area Id', 'non-default-textarea-id')}
      textTooLongMsg={text('Text Too Long Message', 'The text is too long')}
    />
  ));
