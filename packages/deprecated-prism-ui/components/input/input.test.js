import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Input from './Input';

const testText = 'No, you\'re confused. Trash Bandit is my daughter. Dolores is my raccoon.';

const mockFunction = jest.fn();

const testIcon = {
  name: 'tail-right',
  onClick: mockFunction,
};

describe('<Input />', () => {
  test('Required defaults to false', () => {
    const { getByPlaceholderText } = render(
      <Input placeholderText={testText} />,
    );

    const defaultInput = getByPlaceholderText(
      'No, you\'re confused. Trash Bandit is my daughter. Dolores is my raccoon.',
    );

    expect(defaultInput).toHaveClass('psm-input');
  });

  test('Leading icon defaults to right arrows', () => {
    const { getByLabelText } = render(<Input />);

    const trailingIcon = getByLabelText('tail-right icon');

    expect(trailingIcon).toBeTruthy();
  });

  test('Uses leading icon when leading is true', () => {
    const { getByLabelText } = render(
      <Input icon={{ name: 'desktop', position: 'leading' }} />,
    );

    const leadingIcon = getByLabelText('desktop icon');

    expect(leadingIcon.parentElement).toHaveClass('psm-input-leading-icon');
  });

  test('icon\'s onClick function works', () => {
    const { getByLabelText } = render(<Input placeholderText={testText} icon={testIcon} />);
    const icon = getByLabelText('tail-right icon');
    fireEvent.click(icon);
    expect(mockFunction).toHaveBeenCalled();
  });
});
