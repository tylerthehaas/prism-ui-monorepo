import { text, withKnobs, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Alert from './Alert';

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <Alert
      alertPrefix={text('Alert prefix', 'a message!')}
      alertType={select('Alert types', ['info', 'success', 'error', 'warning'])}
      onDismiss={() => alert('')}
      dataTestId={text('Data test id', 'any id you fancy')}
    >
      {text(
        'Alert message',
        'What do you mean I didn‘t win I ate more wet t-shirts than anyone else',
      )}
    </Alert>
  ));
