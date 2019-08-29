import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import TypeAheadSearch from './typeahead-search';
import TypeaheadSearchNotes from './typeahead-search.md';

storiesOf('Typeahead search', module)
  .addDecorator(withKnobs)
  .add('component', () => <TypeAheadSearch />, {
    notes: {
      markdown: TypeaheadSearchNotes,
    },
  });
