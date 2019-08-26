import React, { MouseEvent } from 'react';
import uuid from 'uuid/v4';
import './nav.scss';

interface NavProps {
  /** Highlights the active tab */
  'data-testid'?: string;
  /** Array of destinations in the navbarâ€“ see notes for information on type */
  tabs: Tab[];
}

export interface Tab {
  /** If true, this indicates that this is the active tab */
  active: boolean
  /** Name of the tab */
  tabName: string;
  /** Event that fires when the user clicks a tab */
  onClick: (
    event?: MouseEvent<HTMLButtonElement>,
  ) => void;
  /** Number of errors in a given tab */
  numErrors?: number;
  /** If true, flags the tab as having something new in it */
  isNew?: boolean;
  /** Text that announces that something in a tab is new */
  isNewText?: string;
}

export const Nav = ({
  'data-testid': testid = '',
  tabs = [{ tabName: 'Example', active: true, onClick: () => {} }],
}: NavProps) => {
  function handleClick(
    tab: Tab,
    event: MouseEvent<HTMLButtonElement>,
  ) {
    if (tab.onClick) tab.onClick(event);
  }

  return (
    <ul className="psm-nav" id={testid} role="menubar">
      {tabs.map((tab, index) => {
        return (
          <li
            className={`${
              tab.active ? 'psm-nav__active' : 'psm-nav__tab'
            }`}
            id={`tab-${index}`}
            key={uuid()}
            role="none"
          >
            <button
              onClick={event => handleClick(tab, event)}
              role="menuitem"
              type="button"
            >
              {tab.tabName}
              {tab.numErrors && (
                <span
                  className={`psm-nav__tab ${
                    tab.isNew ? 'psm-nav__new' : 'psm-nav__badge'
                  }`}
                >
                  <span
                    className={`${
                      tab.isNew ? 'psm-nav__new-text' : 'psm-nav__badge-text'
                    }`}
                  >
                    {tab.isNew ? `${tab.isNewText ? tab.isNewText : 'new'}` : tab.numErrors}
                  </span>
                </span>
              )}
            </button>
          </li>
        )
;})}
    </ul>
  );
};

export default Nav;
