import React from 'react';
import Avatar from '../avatar/Avatar';
import Dropdown from '../dropdown/Dropdown';
import Icon from '../icon/Icon';
import Nav, { Tab } from '../nav/Nav';
import './header.scss';

interface LayoutProps {
  /** Custom class name for component */
  className?: string;
  layout: Layout;
  userSearchUrl: string;
  userSearchOnSelect: () => void;
}

interface UserMenu {
  linkName: string;
  url: string;
}

interface Layout {
  banks: Bank[];
  customer: Customer;
  notificationCount: number;
  tabs: { primary: Tab[]; secondary: Tab[] };
  user: User;
  userMenu: UserMenu[];
}

interface User {
  firstName: string;
  id: number;
  lastName: string;
  notifications?: number;
  profileURL: string;
}

interface Customer {
  id: number;
  logoURL: string;
  name: string;
}

interface Bank {
  bankId: number;
  bankName: string;
  pointsBalance: number;
  accessCodesBalance: number;
  bankType: string;
}

export const Header = ({
  className = '',
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
        bankId: NaN,
        bankName: '',
        pointsBalance: NaN,
        accessCodesBalance: NaN,
        bankType: '',
      },
    ],
    notificationCount: 0,
    tabs: {
      primary: [],
      secondary: [],
    },
    userMenu: [
      {
        linkName: '',
        url: '',
      },
    ],
  },
}: LayoutProps) => {
  const { customer, banks, notificationCount, tabs, user, userMenu } = layout;

  return (
    <header className={`psm-header main-header ${className}`}>
      <a className="logo" href="/" title={customer && customer.name}>
        <img
          src={customer && customer.logoURL}
          alt={`${customer && customer.name} logo`}
        />
      </a>

      <div className="account">
        <span className="notifications">
          <button
            type="button"
            className="bell showMenu"
            aria-label="Notifications"
          >
            <Icon iconName="notification" />
            <span className={notificationCount ? 'alert' : ''}>
              {notificationCount}
            </span>
          </button>
        </span>

        <div className="user-info">
          <span className="user-name">
            {user.firstName} {user.lastName}
          </span>

          <a className="points" href="/">
            {banks && banks[0] && `${banks[0].pointsBalance} pts`}
          </a>
        </div>

        <span className="profile-menu" id="account-menu" role="button">
          <Dropdown
            dropdownMenu={userMenu.map(menuItem => ({
              label: menuItem.linkName,
              onClick: () => (window.location.href = menuItem.url),
            }))}
          >
            <Avatar size="sm" src={user && user.profileURL} />
          </Dropdown>
        </span>
      </div>

      <nav className="main-nav">
        <Nav className="primary-nav" horizontal tabs={tabs.primary} />
        <Nav className="secondary-nav" horizontal tabs={tabs.secondary} />
      </nav>
    </header>
  );
};

export default Header;
