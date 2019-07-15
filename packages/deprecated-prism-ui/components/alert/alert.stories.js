import { text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import Alert from './Alert';

const alertText = `Don’t👏 pretend👏 to 👏be 👏entitled👏 to👏 financial👏 compensation👏 if 👏you 👏or👏 a👏 loved 👏one 👏hasn’t👏 even 👏been 👏diagnosed👏 with 👏mesothelioma`;

storiesOf('Alert', module)
  .addDecorator(withKnobs)
  .add('default', () => <Alert />)
  .add('success', () => (
    <Alert alertType="success">
      {`What do you mean I didn't win I ate more wet t-shirts than anyone else`}
    </Alert>
  ))
  .add('error', () => (
    <Alert alertType="error">
      {`seems like a TRULY crazy train wouldn't need to announce "all aboard"`}
    </Alert>
  ))
  .add('warning', () => (
    <Alert alertType="warning">
      barn owls must have been stoked when the barn was invented
    </Alert>
  ))
  .add('on dismiss', () => (
    <Alert onDismiss={() => alert('you dismissed me')} />
  ))
  .add('knobs', () => (
    <Alert
      alertType={text('Alert types', 'info')}
      dataTestId={text('Data test id', 'any id you fancy')}
      onDismiss={() => alert('')}
    >
      {text('Alert text', alertText)}
    </Alert>
  ));
