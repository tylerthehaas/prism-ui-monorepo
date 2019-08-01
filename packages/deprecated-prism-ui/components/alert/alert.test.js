import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Alert from './Alert';

const testText = 'Pick up artists and garbage men should switch names';

describe('<Alert/>', () => {
  test('alertType defaults to info', () => {
    const { getByText } = render(<Alert>{testText}</Alert>);

    const defaultAlert = getByText(testText);
    expect(defaultAlert.parentElement).toHaveClass('psm-alert psm-alert--info');
  });

  test('it can be closed', () => {
    const { getByText, queryByText } = render(<Alert>{testText}</Alert>);

    const closableAlert = getByText(testText);

    expect(closableAlert).toBeTruthy();
    fireEvent.click(document.getElementById('alert-nub-close'));
    const closedAlert = queryByText(testText);

    expect(closedAlert).toBeNull();
  });

  ['info', 'error', 'warning', 'success'].forEach(alertType => {
    test(`alertType="${alertType}" renders an ${alertType} alert`, () => {
      const { getByText } = render(
        <Alert alertType={alertType}>{testText}</Alert>,
      );

      const alert = getByText(testText);

      expect(alert.parentElement).toHaveClass(`psm-alert--${alertType}`);
    });
  });
});
