import React from 'react';
import { render } from '@testing-library/react';

import Toggle from './Toggle';

describe('<Toggle />', () => {
  it('Defaults to false', () => {
    const { container } = render(<Toggle />);
    expect(container.firstChild).toHaveClass('psm-toggle psm-toggle--inactive');
  });
});
