import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Radio from './Radio';

const testRadio = [
  {
    text: 'If I pay $40 for a haunted house I better die',
    checked: true,
  },
  {
    text:
      'The best way to read a poem is to pretend each line is the name of a horse; so the poem is just a list of horses',
    checked: false,
  },
];

describe('<Radio />', () => {
  test('Checked defaults to first option', () => {
    const { container } = render(<Radio buttons={testRadio} />);

    const firstButton = container.querySelector('input');

    expect(firstButton).toHaveProperty('checked', true);
  });

  test('Option 2 is checked when selected', () => {
    const { getByText, getByTestId } = render(
      <Radio buttons={testRadio} data-testid="testing" />,
    );

    const lookForSecondCheckmark = getByText(
      'The best way to read a poem is to pretend each line is the name of a horse; so the poem is just a list of horses',
    );

    const selectedCircle = getByTestId('testing 1');

    expect(selectedCircle).toHaveProperty('checked', false);

    fireEvent.click(lookForSecondCheckmark);

    const reselectedCircle = getByTestId('testing 1');

    expect(reselectedCircle).toHaveProperty('checked', true);
  });
});
