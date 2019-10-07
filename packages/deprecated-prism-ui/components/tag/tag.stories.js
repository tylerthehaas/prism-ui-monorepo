import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Tag from './Tag';

storiesOf('Tag', module)
  .addParameters({ component: Tag })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Tag
      className={text('class name', 'class name')}
      content={text(
        'Tag content',
        'Before the invention of the face mask, the average NFL game was over 6 hours long because of delays caused by the players kissing',
      )}
    />
  ));
