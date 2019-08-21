import React from 'react';
import {
 render, fireEvent,
} from '@testing-library/react';

import Textbox from './textbox';

const testText = 'One time my dad saw a car for sale on a guy’s lawn in Wisconsin and thought it was a car that could transition into being a boat (???) so he told the guy he’d love to “buy this thing and drive it straight into the lake” which must’ve seemed like a massive power move at the time';

describe('<Textbox />', () => {
  it('should return an error message if the number of characters in the box is higher than its limit', () => {
    const { container, getByText } = render(<Textbox />);
    const inputBox = container.querySelector('.psm-form__textarea');
    fireEvent.change(inputBox, { target: { value: testText } });
    testText.split('').forEach(character => fireEvent.keyPress(inputBox, { key: character }));
    const tooLongMessage = getByText('Your message is too long. Cut back to 250 characters.');
    expect(tooLongMessage).toBeTruthy();
  });
});
