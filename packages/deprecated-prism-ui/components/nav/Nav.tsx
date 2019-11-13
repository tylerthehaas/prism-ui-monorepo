import React, { MouseEvent } from 'react';
import shortid from 'shortid';
import './nav.scss';

interface NavProps {
  /** Custom class name for component */
  className?: string;
  /** Highlights the active tab */
  'data-testid'?: string;
  /** Determines the component's orientation */
  horizontal?: boolean;
  /** Array of destinations in the navbarâ€“ see notes for information on type */
  tabs: Tab[];
  /** Replaces the active color with a user's color. Defaults to purple if given an invalid hex string */
  userColor?: string;
}

export interface Tab {
  /** If true, this indicates that this is the active tab */
  active: boolean;
  dropdowns?: [];
  /** Where to link to */
  href?: string;
  /** Where the tab navigates to. Defaults to /tabName */
  url: string;
  /** Number of errors in a given tab */
  numErrors?: number;
  /** Event that fires when the user clicks a tab */
  onClick: (event?: MouseEvent<HTMLLIElement>) => void;
  /** Name of the tab */
  tabName: string;
}

export const Nav = ({
  className = '',
  'data-testid': testid = '',
  horizontal = false,
  tabs,
  userColor = '',
}: NavProps) => {
  function userColorTab(tab: Tab) {
    const direction = horizontal
      ? ['borderBottom', 'inherit']
      : ['borderLeft', userColor];
    if (tab.active && userColor) {
      return {
        [direction[0]]: `4px solid ${userColor}`,
        color: direction[1],
      };
    }
    return {};
  }

  return (
    <ul
      className={`psm-nav${horizontal ? '-horizontal' : ''} ${className}`}
      id={testid}
      role="menubar"
    >
      {tabs &&
        tabs.map((tab, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li
            className={`${tab.active ? 'psm-nav__active' : 'psm-nav__tab'}`}
            id={`tab-${index}-${shortid.generate()}`}
            key={shortid.generate()}
            role="menuitem"
            style={userColorTab(tab)}
          >
            <a href={tab.url}>
              {tab.tabName}
              {tab.numErrors && (
                <span className={`${tab.numErrors ? 'psm-nav__badge' : ''}`}>
                  {tab.numErrors}
                </span>
              )}
            </a>
          </li>
        ))}
    </ul>
  );
};

export default Nav;
