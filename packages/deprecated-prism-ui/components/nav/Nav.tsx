import React, { MouseEvent } from 'react';
import uuid from 'uuid/v4';
import './nav.scss';

interface NavProps {
  /** Highlights the active tab */
  'data-testid'?: string;
  /** Determines the component's orientation */
  horizontal?: boolean;
  /** Array of destinations in the navbarâ€“ see notes for information on type */
  tabs: Tab[];
}

export interface Tab {
  /** If true, this indicates that this is the active tab */
  active: boolean;
  /** Name of the tab */
  tabName: string;
  /** Event that fires when the user clicks a tab */
  onClick: (event?: MouseEvent<HTMLLIElement>) => void;
  /** Number of errors in a given tab */
  numErrors?: number;
}

export const Nav = ({
  'data-testid': testid = '',
  horizontal = false,
  tabs = [],
}: NavProps) => {
  function handleClick(tab: Tab, event: MouseEvent<HTMLLIElement>) {
    if (tab.onClick) tab.onClick(event);
  }

  return (
    <ul
      className={`psm-nav${horizontal ? '-horizontal' : ''}`}
      id={testid}
      role="menubar"
    >
      {tabs.map((tab, index) => (
        // eslint-disable-next-line jsx-a11y/click-events-have-key-events
        <li
          className={`${tab.active ? 'psm-nav__active' : 'psm-nav__tab'}`}
          id={`tab-${index}`}
          key={uuid()}
          onClick={event => handleClick(tab, event)}
          role="menuitem"
        >
          {tab.tabName}
          {tab.numErrors && (
            <span className={`${tab.numErrors ? 'psm-nav__badge' : ''}`}>
              {tab.numErrors}
            </span>
          )}
        </li>
      ))}
    </ul>
  );
};

export default Nav;
