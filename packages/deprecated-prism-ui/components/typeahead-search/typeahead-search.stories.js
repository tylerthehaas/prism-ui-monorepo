import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import TypeaheadSearch from './typeahead-search';
import TypeaheadSearchNotes from './typeahead-search.md';

storiesOf('Typeahead search', module)
  .addParameters({ component: TypeaheadSearch })
  .addDecorator(withKnobs)
  .add(
    'component',
    () => <TypeaheadSearch className={text('class name', 'class name')} />,
    {
      notes: {
        markdown: TypeaheadSearchNotes,
      },
    },
  );
