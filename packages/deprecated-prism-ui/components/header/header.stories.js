import { storiesOf } from '@storybook/react';
import React from 'react';
import { withKnobs, object, text } from '@storybook/addon-knobs';
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
      { tabName: 'Home', active: true },
      { tabName: 'My team' },
      { tabName: 'Shopping Cart' },
      { tabName: 'Give Widget' },
    ],
    secondary: [{ tabName: 'Admin Tools' }],
  },
  notificationCount: 99,
  userMenu: [
    {
      linkName: 'Profile',
      url: '/profile',
    },
    {
      linkName: 'Settings',
      url: '/settings',
    },
    {
      linkName: 'Claim a reward code',
      url: '/claim',
    },
    {
      linkName: 'Shipping addresses',
      url: '/addresses',
    },
    {
      linkName: 'Order history',
      url: '/history',
    },
    {
      linkName: 'Logout',
      url: '/logout',
    },
  ],
};

storiesOf('Header', module)
  .addParameters({ component: Header })
  .addDecorator(withKnobs)
  .add('default', () => (
    <Header
      className={text('class name', 'class name')}
      layout={object('layout', layout)}
      userColor={text('user color', '#fcba03')}
    />
  ));
