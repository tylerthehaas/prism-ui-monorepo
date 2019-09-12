import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <Button
      style={select('button style', ['primary', 'small', 'text'])}
      linkRef={text('Link Ref', "I'm a link ref!")}
      disabled={boolean('Disabled', false)}
      onClick={() => alert('button clicked')}
    />
  ));
