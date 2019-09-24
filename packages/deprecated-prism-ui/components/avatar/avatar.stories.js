import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import Avatar from './Avatar';

storiesOf('Avatar', module)
  .addParameters({ component: Avatar })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Avatar
      size={select('size', ['xs', 'sm', 'md', 'lg', 'xl'], 'lg')}
      initials={text('Initials', 'BL')}
      src={text('Image source', 'https://i.imgur.com/qBZCY4W.png')}
    />
  ));
