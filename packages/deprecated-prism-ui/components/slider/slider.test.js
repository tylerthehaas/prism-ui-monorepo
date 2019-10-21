import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Slider from './slider';

describe('<Slider />', () => {
  it('displays the right number', () => {
    const { container, getByText } = render(<Slider />);
    const slider = container.querySelector('input');
    fireEvent.change(slider, { target: { value: 50 } });
    expect(getByText('50')).toBeTruthy();
  });
});
