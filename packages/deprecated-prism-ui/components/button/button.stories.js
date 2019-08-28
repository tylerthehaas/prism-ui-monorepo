import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <Button
      primary={boolean('Primary button', true)}
      small={boolean('Small button', false)}
      linkRef={text('Link Ref', "I'm a link ref!")}
      disabled={boolean('Disabled', false)}
      onClick={() => alert('button clicked')}
    />
  ));
