import React from 'react';
import { render } from '@testing-library/react';

import Header from './Header';

const layout = {
  user: {
    id: 123456,
    firstName: 'John',
    lastName: 'Doe',
    profileURL: 'https://randomuser.me/api/portraits/men/32.jpg'
  },
  customer: {
    id: 6971300,
    name: 'O.C. Tanner',
    logoURL: 'https://www.octanner.com/content/dam/oc-tanner/images/OCTannerLogos/2017-OCTLogo-lowres.png'
  },
  banks: [
    {
      id: 3216701,
      isAccessCodeBank: false,
      isCurrentBank: true,
      isPointsBank: true,
      link: 'https://qa.appreciatehub.com/ng/catalog.jsf?programId=4509251#/cart',
      name: 'OCT Points',
      points: 3165,
    },
  ],
  tabs: [
    { tabName: 'Social feed' },
    { tabName: 'My team' },
    { tabName: 'Events' },
    { tabName: 'Initiatives' },
    { tabName: 'Conversations' },
    { tabName: 'Programs' },
  ],
};

describe('<Header/>', () => {
  test('Header can render', () => {
    const { getByText } = render(<Header layout={layout} />);
    const socialFeed = getByText('Social feed');
    expect(socialFeed).toBeTruthy();
  });
});
