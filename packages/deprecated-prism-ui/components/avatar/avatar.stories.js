import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Avatar from './Avatar';

storiesOf('Avatar', module)
  .addDecorator(withKnobs)
  .add('default', () => <Avatar />)
  .add('size', () => <Avatar size="lg" />)
  .add('initials', () => <Avatar initials="JV" />)
  .add('source', () => (
    <Avatar size="xl" src="https://i.imgur.com/qBZCY4W.png" />
  ))
  .add('knobs', () => (
    <Avatar
      initials={text('Initials', 'JV')}
      size={text('Size', 'lg')}
      src={text('Image source', 'https://i.imgur.com/qBZCY4W.png')}
    />
  ));
