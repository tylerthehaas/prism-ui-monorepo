import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import TypeaheadSearch from './typeahead-search';
import TypeaheadSearchNotes from './typeahead-search.md';

storiesOf('Typeahead search', module)
  .addParameters({ component: TypeaheadSearch })
  .addDecorator(withKnobs)
  .add(
    'component',
    () => (
      <TypeaheadSearch
        auth={text(
          'auth',
          'Bearer ',
        )}
        threshold={number('threshold', 3)}
        className={text('class name', 'class name')}
        resultFormat={formattingObject =>
          `${formattingObject.firstName} ${formattingObject.lastName}`
        }
        url={text(
          'url',
          'https://graphql-core-stg.alamoapp.octanner.io/graphql',
        )}
      />
    ),
    {
      notes: {
        markdown: TypeaheadSearchNotes,
      },
    },
  );
