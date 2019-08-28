import React from 'react';
import { render } from '@testing-library/react';

import HR from './Hr';

describe('<HR />', () => {
  it('Has a  horizontal rule', () => {
    const { container } = render(<HR />);
    expect(container.firstChild.classList).toContain('psm-hr');
  });
});
