import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Button from './Button';

describe('<Button />', () => {
  it('defaults to primary', () => {
    const { getByText } = render(<Button dropdown={false} label="Menu" />);
    const button = getByText('Menu');
    expect(button.classList).toContain('psm-button--primary');
  });

  it('is not primary when primary is false', () => {
    const { getByText } = render(<Button label="Menu" primary={false} />);
    const button = getByText('Menu');
    expect(button.classList).toContain('psm-button');
  });

  it('defaults to Large', () => {
    const { getByText } = render(<Button label="Menu" primary={false} />);

    const button = getByText('Menu');
    expect(button).not.toContain('psm-button--small');
  });

  it('is small when small is true', () => {
    const { getByText } = render(<Button label="Menu" primary={false} small />);

    const button = getByText('Menu');
    expect(button.classList).toContain('psm-button--small');
  });

  it('defaults to a button, not a link', () => {
    const { container } = render(<Button label="Menu" primary={false} small />);
    expect(container.querySelector('button')).toBeTruthy();
  });

  it('is a link when it has an href', () => {
    const { container } = render(
      <Button label="Menu" linkRef="octanner.design" primary={false} small />,
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
