import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, array, text } from '@storybook/addon-knobs';
import Pagination from './Pagination';

storiesOf('Pagination', module)
  .addParameters({ component: Pagination })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Pagination
      className={text('class name', 'class name')}
      defaultPage={number('page to start on', 1)}
      itemsPerPage={number('items per page', 10)}
    >
      {array('strings to paginate', [...Array(22).keys()])}
    </Pagination>
  ));
