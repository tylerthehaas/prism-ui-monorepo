import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import Tag from './Tag';

storiesOf('Tag', module)
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <Tag
        content={text(
          'Tag content',
          'Before the invention of the face mask, the average NFL game was over 6 hours long because of delays caused by the players kissing',
        )}
      />
    )
  );
