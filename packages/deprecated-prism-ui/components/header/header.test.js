import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

const layout = {
  user: {
    id: 123456,
    firstName: 'John',
    lastName: 'Doe',
    profileURL: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  customer: {
    id: 6971300,
    name: 'O.C. Tanner',
    logoURL:
      'https://www.octanner.com/content/dam/oc-tanner/images/OCTannerLogos/2017-OCTLogo-lowres.png',
  },
  banks: [
    {
      bankId: 3216701,
      bankName: 'Bank',
      pointsBalance: 7838,
      accessCodesBalance: 0,
      bankType: 'POINTS',
    },
  ],
  tabs: {
    primary: [
      { tabName: 'Social feed', active: true },
      { tabName: 'My team' },
      { tabName: 'Events' },
      { tabName: 'Initiatives' },
      { tabName: 'Conversations' },
      { tabName: 'Programs' },
    ],
    secondary: [
      {
        tabName: 'Admin tools',
      },
    ],
  },
  userMenu: [
    {
      linkName: 'a thing',
      url: '/url'
    }
  ]
};

describe('<Header/>', () => {
  test('Header can render', () => {
    const { getByText } = render(<Header layout={layout} />);
    const socialFeed = getByText('Social feed');
    expect(socialFeed).toBeTruthy();
  });
});
