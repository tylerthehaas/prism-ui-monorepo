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

  test('The close icon works', () => {
    const { queryByText } = render(<Modal show>{testText}</Modal>);

    fireEvent.click(document.querySelector('.psm-modal__close'));

    const lookForTestText = queryByText(testText);

    expect(lookForTestText).toBeFalsy();
  });

  test('Clicking the button closes the modal by default', () => {
    const { queryByText } = render(<Modal show>{testText}</Modal>);

    fireEvent.click(queryByText(`I don't actually do anything right now`));

    const lookForTestText = queryByText(testText);

    expect(lookForTestText).toBeFalsy();
  });
});
