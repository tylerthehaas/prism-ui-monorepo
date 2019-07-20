import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Chip from './Chip';

describe('<Chip />', () => {
  it('Chip shows label', () => {
    const { getByText } = render(<Chip isOpen label="Chip Label" />);
    expect(getByText(/Chip Label/i)).toBeInTheDocument();
  });

  it('Chip button calls appropriate action', () => {
    const { getByText, container } = render(<Chip isOpen label="Chip Label" />);
    expect(container.querySelector('.psm-chip')).toBeInTheDocument();
    expect(
      container.querySelector('.psm-chip--selected'),
    ).not.toBeInTheDocument();
    fireEvent.click(getByText(/Chip Label/i));
    expect(container.querySelector('.psm-chip')).not.toBeInTheDocument();
    expect(container.querySelector('.psm-chip--selected')).toBeInTheDocument();
  });
});
