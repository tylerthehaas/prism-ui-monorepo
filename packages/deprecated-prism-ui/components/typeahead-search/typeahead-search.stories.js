import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import TypeaheadSearch from './typeahead-search';
import TypeaheadSearchNotes from './typeahead-search.md';

storiesOf('Typeahead search', module)
  .addParameters({ component: TypeaheadSearch })
  .addDecorator(withKnobs)
  .add('component', () => <TypeaheadSearch />, {
    notes: {
      markdown: TypeaheadSearchNotes,
    },
  });
