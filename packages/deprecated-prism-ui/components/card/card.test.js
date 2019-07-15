import React from 'react';
import { render } from '@testing-library/react';

import Card from './Card';

const testText = 'Pick up artists and garbage men should switch names';

describe('<Card />', () => {
  test('Defaults to small shadow', () => {
    const { getByText } = render(<Card>{testText}</Card>);

    const defaultCard = getByText(
      'Pick up artists and garbage men should switch names',
    );
    expect(defaultCard).toHaveClass('psm-card psm-card--shadow-sm');
  });

  test('Small shadow', () => {
    const { getByText } = render(<Card shadowType="sm">{testText}</Card>);
    const shadow1 = getByText(
      'Pick up artists and garbage men should switch names',
    );
    expect(shadow1).toHaveClass('psm-card psm-card--shadow-sm');
  });

  test('Medium shadow', () => {
    const { getByText } = render(<Card shadowType="md">{testText}</Card>);
    const shadow2 = getByText(
      'Pick up artists and garbage men should switch names',
    );

    expect(shadow2).toHaveClass('psm-card psm-card--shadow-md');
  });

  test('Large shadow', () => {
    const { getByText } = render(<Card shadowType="lg">{testText}</Card>);
    const shadow3 = getByText(
      'Pick up artists and garbage men should switch names',
    );

    expect(shadow3).toHaveClass('psm-card psm-card--shadow-lg');
  });
});
