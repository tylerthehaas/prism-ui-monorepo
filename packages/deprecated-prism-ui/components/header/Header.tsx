import React from 'react';
import Avatar from '../avatar/Avatar';
import Icon from '../icon/Icon';
import Nav, { Tab } from '../nav/Nav';
import './header.scss';

interface LayoutProps {
  layout: Layout;
}

interface Layout {
  user: User;
  customer: Customer;
  banks: Bank[];
  tabs: Tab[];
}

interface User {
  id: number;
  firstName: string;
  lastName: string;
  profileURL: string;
}

interface Customer {
  id: number;
  name: string;
  logoURL: string;
}

interface Bank {
  id: number;
  isAccessCodeBank: boolean;
  isCurrentBank: boolean;
  isPointsBank: boolean;
  link: string;
  name: string;
  points: number;
}

const Header = ({
  layout = {
    user: {
      id: NaN,
      firstName: '',
      lastName: '',
      profileURL: '',
    },
    customer: {
      id: NaN,
      name: '',
      logoURL: '',
    },
    banks: [
      {
        id: NaN,
        isAccessCodeBank: false,
        isCurrentBank: false,
        isPointsBank: false,
        link: '',
        name: '',
        points: NaN,
      },
    ],
    tabs: [],
  },
}: LayoutProps) => {
  const { user, customer, banks, tabs } = layout;
  return (
    <header className="psm-header main-header">
      <a className="logo" href="/" title={customer && customer.name}>
        <img
          src={customer && customer.logoURL}
          alt={`${customer && customer.name} logo`}
        />
      </a>

      <div className="account">
        <button
          type="button"
          className="bell showMenu"
          aria-label="Notifications"
        >
          <Icon iconName="notification" />
          <span className="alert">99+</span>
        </button>

        <a className="cart" href="/index.html" aria-label="Go to cart">
          <Icon iconName="shopping-cart" />
        </a>

        <a className="points" href="/">
          {banks &&
            `${banks.reduce((sum, bank) => sum + bank.points, 0)} points`}
        </a>

        <button
          type="button"
          className="psm-avatar--sm showMenu"
          id="account-menu"
        >
          <Avatar size="sm" src={user && user.profileURL} />
        </button>
      </div>

      <nav className="main-nav psm-nav">
        <Nav data-testid="nav1" tabs={tabs} />

        <a className="admin-tools" href="/">
          Open admin tools
          <Icon iconName="arrow-tail-right" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
