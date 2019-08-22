import React, { useState, MouseEvent } from 'react';
import './nav.scss';

interface NavProps {
  active?: number;
  'data-testid'?: string;
  tabs: Tab[];
}

export interface Tab {
  tabName: string;
  onClick?: (
    event?: MouseEvent<Element>,
  ) => void;
  numErrors?: number;
  isNew?: boolean;
  isNewText?: string;
  focused?: boolean;
}

interface NavState {
  active: number;
  tabState: Tab[];
}

export const Nav = ({
  active = 0,
  'data-testid': testid = '',
  tabs = [{tabName: 'Example'}],
}: NavProps) => {
  const [activeState, setActiveState] = useState<NavState['active']>(active);
  const [tabState, setTabState] = useState<NavState['tabState']>(tabs);

  function updateTabFocus(index: number, tab: Tab, focusValue: boolean) {
    tab.focused = focusValue;
    setTabState(tabState.splice(index, 1, tab));
  }

  function handleClick(
    index: number,
    tab: Tab,
    event: MouseEvent,
  ) {
    setActiveState(index);
    updateTabFocus(index, tab, false);
    if (tab.onClick) tab.onClick(event);
  }

  return (
    <ul className="psm-nav" id={testid} role="menubar">
      {tabs.map((tab, index) => {
        return (
          <li
            className={`psm-nav__tab ${
              activeState === index ? 'psm-nav__active' : ''
            } ${
              activeState !== index && tab.focused ? 'psm-nav__hovered' : ''
            }`}
            id={`tab-${index}`}
            key={index}
            onMouseEnter={() => updateTabFocus(index, tab, true)}
            onMouseLeave={() => updateTabFocus(index, tab, false)}
            role="none"
          >
            <button
              onClick={event => handleClick(index, tab, event)}
              onBlur={() => updateTabFocus(index, tab, false)}
              onFocus={() => updateTabFocus(index, tab, true)}
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
        );
      })}
    </ul>
  );
};

export default Nav;
