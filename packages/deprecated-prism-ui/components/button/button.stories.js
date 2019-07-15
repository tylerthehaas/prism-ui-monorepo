import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('default', () => <Button onClick={() => alert('button clicked')} />)
  .add('primary', () => <Button primary />)
  .add('small', () => <Button small />)
  .add('linked', () => <Button linkRef="https://example.com/" />)
  .add('disabled', () => <Button disabled />)
  .add('knobs', () => (
    <Button
      disabled={boolean('Disabled', false)}
      label={text('Button label', 'Check out this cool button')}
      linkRef={text('Link Ref', `I'm a link ref!`)}
      primary={boolean('Primary', true)}
      small={boolean('Make the button smaller?', false)}
    />
  ));
