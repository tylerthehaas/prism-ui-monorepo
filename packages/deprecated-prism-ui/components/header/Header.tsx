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
  /** Passes a hex string into the Nav component */
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
  userColor: string;
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
    userColor: '',
    userMenu: [
      {
        linkName: '',
        url: '',
      },
    ],
  },
}: LayoutProps) => {
  const {
    customer,
    banks,
    notificationCount,
    tabs,
    user,
    userColor,
    userMenu,
  } = layout;

  const homeTab = tabs.primary.find(tab => tab.tabName === 'Home');

  return (
    <header className={`psm-header main-header ${className}`}>
      <a className="logo" href={homeTab && homeTab.url} title="Home">
        <img
          src={customer && customer.logoURL}
          alt={`${
            customer && customer.name ? customer.name : 'Corporate'
          } Logo`}
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
            {notificationCount !== 0 ? (
              <span className={notificationCount ? 'alert' : ''}>
                {notificationCount}
              </span>
            ) : (
              ''
            )}
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
              href: menuItem.url,
            }))}
          >
            <Avatar
              size="md"
              src={user && user.profileURL}
              initials={
                user && user.firstName[0] && user.lastName[0]
                  ? `${user.firstName[0].toUpperCase()}${user.lastName[0].toUpperCase()}`
                  : ''
              }
            />
          </Dropdown>
        </span>
      </div>

      <nav className="main-nav">
        <Nav
          className="primary-nav"
          horizontal
          tabs={tabs.primary}
          userColor={userColor}
        />
        <Nav className="secondary-nav" horizontal tabs={tabs.secondary} />
      </nav>
    </header>
  );
};

export default Header;
