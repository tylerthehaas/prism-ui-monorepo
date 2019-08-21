import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Chip from './Chip';

const chipText = 'The worst part about being a giraffe is having a lot of time to think about your mistakes when you’re sinking into quicksand';

describe('<Chip />', () => {
  it('Chip shows label', () => {
    const { queryByText } = render(<Chip label={chipText} />);
    const labelText = queryByText(chipText);
    expect(labelText).not.toBe(null);
  });

  it('Chip button calls appropriate action', () => {
    const { queryByText } = render(<Chip label={chipText} />);
    const initialLabelText = queryByText(chipText);

    fireEvent.click(initialLabelText.childNodes[1]);

    const checkAgain = queryByText(chipText);

    expect(checkAgain).toBe(null);
  });

  it('selects the chip with enter when focused', () => {
    const { getByText } = render(<Chip label={chipText} />);
    const labelText = getByText(chipText);
    fireEvent.focus(labelText);
    fireEvent.keyDown(labelText, { key: 'Enter' });
    expect(labelText.classList).toContain('psm-chip__selected');
  });
});
