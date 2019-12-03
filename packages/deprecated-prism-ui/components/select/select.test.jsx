import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Select from './Select';

const mockFunction = jest.fn(x => x);

const testSelections = [
  {
    text:
      'she was looking quite foreboding with ancient jewels exploding in the shape of a sword on her thorax / well the years start coming and they',
    value: 1,
  },
  {
    text: "Guess who's got 7 thumbs and a a set of keys to a cadaver lab?",
    value: 2,
  },
  {
    text: "Every theater is a drive in theater if you're badass enough",
    value: 3,
  },
  {
    text:
      'hi kids thanks for having me for career day. much like *gestures at cop* fighting crime I as well face many dangers at the shampoo factory',
    value: 4,
  },
];

describe('<Select />', () => {
  it('fires an event when clicked if you give it an onChange prop', () => {
    const { getByTestId } = render(
      <Select
        content={testSelections}
        data-testid="selectBox"
        onChange={mockFunction}
      />,
    );
    const selectBox = getByTestId('selectBox');
    fireEvent.change(selectBox, { target: { value: 3 } });

    expect(mockFunction).toHaveBeenCalled();
  });

  it("doesn't fire an event if you don't give it an onChange prop", () => {
    const { getByTestId } = render(
      <Select content={testSelections} data-testid="selectBox" />,
    );
    const selectBox = getByTestId('selectBox');
    fireEvent.change(selectBox, { target: { value: 3 } });

    expect(mockFunction).not.toHaveBeenCalled();
  });

  it('defaults to no testId', () => {
    const { queryByTestId } = render(<Select content={testSelections} />);
    expect(queryByTestId('')).toBe(null);
  });
});
