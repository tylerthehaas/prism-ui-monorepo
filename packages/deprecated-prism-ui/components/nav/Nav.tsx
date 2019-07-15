import React, { useState } from 'react';
import './nav.scss';

interface NavProps {
  active?: number;
  'data-testid'?: string;
  navigate(event: any, index: number, value: string): any;
  tabs: Tab[];
}

interface Tab {
  tabName: string;
  onClick?: (
    event?: React.MouseEvent<Element, MouseEvent> | KeyboardEvent,
  ) => void;
  numErrors?: number;
  isNew?: boolean;
  focused?: boolean;
}

interface NavState {
  active: number;
  isTab: boolean;
  tabState: Tab[];
}

export const Nav = ({
  active = 0,
  'data-testid': testid = '',
  navigate = () => {},
  tabs = [],
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
    event: React.MouseEvent | KeyboardEvent,
  ) {
    setActiveState(index);
    updateTabFocus(index, tab, false);
    if (tab.onClick) tab.onClick(event);
    if (navigate) navigate(event, index, tab.tabName);
  }

  return (
    <ul className="psm-nav" id={testid}>
      {tabs.map((tab, index) => {
        return (
          <li
            aria-labelledby={tab.tabName}
            className={`psm-nav__tab ${
              activeState === index ? 'psm-nav__active' : ''
            } ${
              activeState !== index && tab.focused ? 'psm-nav__hovered' : ''
            }`}
            id={`tab-${index}`}
            key={index}
            onBlur={() => updateTabFocus(index, tab, false)}
            onClick={event => handleClick(index, tab, event)}
            onFocus={() => updateTabFocus(index, tab, true)}
            onMouseEnter={() => updateTabFocus(index, tab, true)}
            onMouseLeave={() => updateTabFocus(index, tab, false)}
            tabIndex={0}
          >
            <span>
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
                    {tab.isNew ? 'new' : tab.numErrors}
                  </span>
                </span>
              )}
            </span>
          </li>
        );
      })}
    </ul>
  );
};

export default Nav;
