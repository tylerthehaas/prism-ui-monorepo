import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Toggle from './Toggle';

const mockAction = jest.fn(x => x);

describe('<Toggle />', () => {
  it('Defaults to false', () => {
    const { container } = render(<Toggle />);
    expect(container.firstChild.classList).toContain('psm-toggle__wrapper');
    expect(container.firstChild.firstChild.classList).toContain('psm-toggle');
    expect(container.firstChild.firstChild.classList).not.toContain(
      'psm-toggle--active',
    );
  });

  it('fires an action when the toggle changes', () => {
    const { container } = render(<Toggle toggleAction={mockAction} />);
    const toggleSwitch = container.querySelector('.psm-toggle__checkbox');
    fireEvent.click(toggleSwitch);
    expect(mockAction).toHaveBeenCalled();
  });

  it('changes class when focused', async () => {
    const { container } = render(<Toggle />);
    const toggleButton = container.querySelector('.psm-toggle__checkbox');
    const toggleContainer = container.querySelector('.psm-toggle');
    fireEvent.focus(toggleButton);
    expect(toggleContainer.classList).toContain(
      'psm-toggle' && 'psm-toggle--focus',
    );
  });
});
