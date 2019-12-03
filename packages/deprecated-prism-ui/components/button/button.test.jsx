import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  it('defaults to primary', () => {
    const { getByText } = render(<Button dropdown={false} label="Menu" />);
    const button = getByText('Menu');
    expect(button.classList).toContain('psm-button--primary');
  });

  it('defaults to Large', () => {
    const { getByText } = render(<Button label="Menu" primary={false} />);

    const button = getByText('Menu');
    expect(button).not.toContain('psm-button--small');
  });

  it('is text-styled when style is text', () => {
    const { getByText } = render(<Button label="Menu" buttonStyle="text" />);

    const button = getByText('Menu');
    expect(button.classList).toContain('psm-button--text');
  });

  it('defaults to a button, not a link', () => {
    const { container } = render(<Button label="Menu" />);
    expect(container.querySelector('button')).toBeTruthy();
  });

  it('defaults to normal when style is invalid', () => {
    const { getByText } = render(
      <Button label="Menu" buttonStyle="gibberish" />,
    );

    const button = getByText('Menu');
    expect(button.classList).not.toContain(
      'psm-button--primary' || 'psm-button--text',
    );
  });

  it('is a link when it has an href', () => {
    const { container } = render(
      <Button label="Menu" linkRef="octanner.design" />,
    );
    expect(container.querySelector('a')).toBeTruthy();
  });

  it('has an empty data-testid by default', () => {
    const { getByTestId } = render(<Button />);
    const button = getByTestId('');
    expect(button).toBeTruthy();
  });

  it('fires an onClick when clicked', () => {
    const mockOnClick = jest.fn();
    const { getByText } = render(<Button label="Menu" onClick={mockOnClick} />);
    const button = getByText('Menu');
    fireEvent.click(button);
    expect(mockOnClick).toHaveBeenCalled();
  });
});
