import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Radio from './Radio';

const testRadio = [
  {
    text: `If I pay $40 for a haunted house I better die`,
    checked: true,
  },
  {
    text: `The best way to read a poem is to pretend each line is the name of a horse; so the poem is just a list of horses`,
    checked: false,
  },
];

describe('<Radio />', () => {
  test('Checked defaults to first option', () => {
    const { getByText } = render(<Radio buttons={testRadio} />);

    const lookForCheckmark = getByText(
      `If I pay $40 for a haunted house I better die`,
    );

    expect(lookForCheckmark.previousElementSibling).toHaveProperty(
      'checked',
      true,
    );
  });

  test('Option 2 is checked when selected', () => {
    const { getByText } = render(<Radio buttons={testRadio} />);

    const lookForSecondCheckmark = getByText(
      `The best way to read a poem is to pretend each line is the name of a horse; so the poem is just a list of horses`,
    );

    expect(lookForSecondCheckmark.previousElementSibling).toHaveProperty(
      'checked',
      false,
    );

    fireEvent.click(lookForSecondCheckmark.previousElementSibling);

    expect(lookForSecondCheckmark.previousElementSibling).toHaveProperty(
      'checked',
      true,
    );
  });
});
