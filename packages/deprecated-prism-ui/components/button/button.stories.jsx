import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import Button from './Button';

storiesOf('Button', module)
  .addParameters({ component: Button })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Button
      className={text('class name', 'class name')}
      disabled={boolean('Disabled', false)}
      linkRef={text('Link Ref', "I'm a link ref!")}
      onClick={() => alert('button clicked')}
      buttonStyle={select('button style', ['primary', 'small', 'text'])}
    />
  ));
