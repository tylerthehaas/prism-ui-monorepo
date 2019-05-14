import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Toggle from './Toggle';

describe('<Toggle />', () => {
  it('Defaults to false', () => {
    const { container } = render(<Toggle />);
    expect(container.firstChild).toHaveClass('psm-toggle psm-toggle--inactive');
  });
});
