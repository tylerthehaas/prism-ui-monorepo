import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Nav from './Nav';

const onClickMock = jest.fn();

const testTabs = [
  {
    tabName:
      'Harmonicas were invented in 1932 when the worst person in the world decided he needed to organize his hot air into compartments.',
    active: true,
    onClick: onClickMock,
  },
  {
    tabName: `*air horn sound*
    *second air horn sound*
    Me: "This isn't deodorant."`,
    numErrors: 10,
    active: false,
  },
  {
    tabName: `FOUNDER OF HOGWARTS: okay, so we all know there are four types of kid. brave, smart, evil and miscellaneous.
    SCHOOL BOARD: yes, continue.`,
  },
];

describe('<Nav />', () => {
  test('default tab array is empty', () => {
    const { container } = render(<Nav />);
    expect(container.querySelector('.psm-nav__tab')).toBeNull();
  });
});
