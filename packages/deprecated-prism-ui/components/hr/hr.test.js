import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import HR from './hr';

describe('<HR />', () => {
  it('Has a  horizontal rule', () => {
    const { container } = render(<HR />);
    expect(container.firstChild).toHaveClass('psm-hr');
  });
});
