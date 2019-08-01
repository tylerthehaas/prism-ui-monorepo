import React from 'react';
import { render } from '@testing-library/react';

import Toggle from './Toggle';

describe('<Toggle />', () => {
  it('Defaults to false', () => {
    const { container } = render(<Toggle />);
    expect(container.firstChild).toHaveClass('psm-toggle__wrapper');
    expect(container.firstChild.firstChild).toHaveClass('psm-toggle');
    expect(container.firstChild.firstChild).not.toHaveClass(
      'psm-toggle--active'
    );
  });
});
