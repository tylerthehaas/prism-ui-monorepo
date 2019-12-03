import * as React from 'react';
import { render, within, fireEvent } from '@testing-library/react';

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
  notificationCount: 2,
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
      url: '/url',
    },
  ],
};

describe('<Header/>', () => {
  it('displays logo correctly', () => {
    const { getByAltText } = render(<Header layout={layout} />);
    const logo = getByAltText(/o\.c\. tanner logo/i);
    expect(logo).toBeInTheDocument();
    expect(logo.src).toBe(
      'https://www.octanner.com/content/dam/oc-tanner/images/OCTannerLogos/2017-OCTLogo-lowres.png',
    );
  });
  it('displays notification icon with notification count', () => {
    const { queryByLabelText, getByTitle, getByLabelText, rerender } = render(
      <Header layout={layout} />,
    );
    expect(getByTitle('notification icon')).toBeInTheDocument();
    expect(
      within(getByLabelText('Notifications')).getByText(/2/i),
    ).toBeInTheDocument();
    rerender(<Header layout={{ ...layout, notificationCount: 0 }} />);
    expect(
      within(queryByLabelText('Notifications')).queryByText(/2/i),
    ).not.toBeInTheDocument();
  });
  it('calls onClick in menu', () => {
    const { getByAltText, getByText } = render(<Header layout={layout} />);
    fireEvent.click(getByAltText('User Avatar'));
    fireEvent.click(getByText('a thing'));
  });
  it('displays empty message when no bank', () => {
    const noBank = { ...layout, banks: [] };
    const { getByText, rerender } = render(<Header layout={noBank} />);
    expect(
      getByText(/no points balance info at this time/i),
    ).toBeInTheDocument();
    rerender(<Header layout={layout} />);
    expect(getByText(/\d+ pts/i)).toBeInTheDocument();
  });
});
