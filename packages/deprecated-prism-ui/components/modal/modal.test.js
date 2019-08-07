import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Modal from './Modal';

const testText = `I'm sorry Ms. Jackson (Oooooo)/ I am four eels/ Never meant to make your daughter cry/ I am several fish and not a guy`;

describe('<Modal />', () => {
  test('Modal shows when show prop is true', () => {
    const { getByText } = render(<Modal show>{testText}</Modal>);

    const getTextSuccess = getByText(testText);

    expect(getTextSuccess).toHaveTextContent(testText);
  });

  test('calls onClose when background clicked', () => {
    const onClose = jest.fn(x => x + 1);
    const { container } = render(
      <Modal show onClose={onClose}>
        {testText}
      </Modal>,
    );
    fireEvent.click(container.querySelector('dialog'));
    expect(onClose.mock.calls.length).toEqual(1);
  });

  test('Clicking the button closes the modal by default', () => {
    const actions = [
      {
        label: "I don't actually do anything right now",
        primary: true,
        onClick: () =>
          console.log("You just had to test it anyway, didn't you?"),
        shouldCloseModal: true,
      },
      {
        label: "I'm for testing",
        primary: false,
        onClick: () => {},
      },
    ];
    const onClose = jest.fn();
    const { queryByText } = render(
      <Modal show actions={actions} onClose={onClose}>
        {testText}
      </Modal>,
    );

    fireEvent.click(queryByText(`I don't actually do anything right now`));

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});
