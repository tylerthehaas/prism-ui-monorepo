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
      id: 3216701,
      isAccessCodeBank: false,
      isCurrentBank: true,
      isPointsBank: true,
      link:
        'https://qa.appreciatehub.com/ng/catalog.jsf?programId=4509251#/cart',
      name: 'OCT Points',
      points: 3165,
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
};

storiesOf('Header', module)
  .addParameters({ component: Header })
  .addDecorator(withKnobs)
  .add('default', () => (
    <Header
      className={text('class name', 'class name')}
      layout={object('layout', layout)}
    />
  ));
