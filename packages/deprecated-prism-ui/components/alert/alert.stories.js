import { text, withKnobs, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Alert from './Alert';

storiesOf('Alert', module)
  .addParameters({ component: Alert })
  .addDecorator(withKnobs)
  .add('component', () => (
    <Alert
      alertPrefix={text('Alert prefix', 'a message!')}
      alertType={select('Alert type', ['info', 'success', 'error', 'warning'], 'info')}
      className={text('class name', 'class name')}
      dataTestId={text('Data test id', 'any id you fancy')}
      onDismiss={() => alert('')}
    >
      {text(
        'Alert message',
        'What do you mean I didn‘t win I ate more wet t-shirts than anyone else',
      )}
    </Alert>
  ));
