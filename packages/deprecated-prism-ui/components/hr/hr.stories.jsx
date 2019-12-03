import React from 'react';
import { storiesOf } from '@storybook/react';
import Hr from './Hr';

storiesOf('HR', module)
  .addParameters({ component: Hr })
  .add('default', () => <Hr />);
