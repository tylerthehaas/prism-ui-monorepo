import React, { useState } from 'react';
import '../button/button.scss';
import Icon from '../icon/Icon';

export interface DropdownProps {
  'data-testid'?: string;
  disabled?: boolean;
  dropdownMenu: Dropdown[];
  idPrefix?: string;
  label?: string;
  primary?: boolean;
  showMenu?: boolean;
}

export interface Dropdown {
  label?: string;
  onClick?: (event?: React.MouseEvent<HTMLLIElement>) => void;
}
export interface DropdownState {
  isFocused: number;
  showMenu?: boolean;
}

const defaultDropdown = [
  {
    label: 'Menu Item',
    onClick: () => {
      console.log('Menu Item Clicked');
    },
  },
  {
    label: 'Menu Item',
    onClick: () => {
      console.log('Menu Item Clicked');
    },
  },
  {
    label: 'Menu Item',
    onClick: () => {
      console.log('Menu Item Clicked');
    },
  },
];

export const Dropdown = ({
  'data-testid': testid = '',
  disabled = false,
  dropdownMenu = defaultDropdown,
  idPrefix = '',
  label = 'Dropdown Label',
  primary = true,
  showMenu = false,
}: DropdownProps) => {
  const [showMenuState, setShowMenuState] = useState<DropdownState['showMenu']>(
    showMenu,
  );

  function menuClick(action: Dropdown) {
    if (action.onClick) action.onClick();
    setShowMenuState(!showMenuState);
  }

  function blurFunction(event: { currentTarget: any }) {
    const { currentTarget } = event;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowMenuState(false);
      }
    }, 0);
  }

  function handleEscape(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      setShowMenuState(false);
    }
  }

  return (
    <div onBlur={blurFunction} className="psm-dropdown__container">
      {
        <button
          aria-labelledby={label}
          className={`psm-dropdown${primary ? '--primary' : ''}`}
          data-testid={testid}
          disabled={disabled}
          onClick={() => setShowMenuState(!showMenu)}
          type="button"
        >
          {label}
          <Icon
            iconName="small-triangle-down"
            height="16px"
            width="16px"
            fill="white"
          />
        </button>
      }
      {showMenu && (
        <div
          className="psm-dropdown__menu"
          onKeyDown={handleEscape}
          role="button"
          tabIndex={0}
        >
          <ul className="psm-dropdown__ul">
            {dropdownMenu.map((action, index) => {
              return (
                <li
                  className="psm-dropdown__li"
                  data-testid={`${testid}-option-${index}`}
                  key={index}
                  onClick={() => menuClick(action)}
                  onKeyDown={event => {
                    if (event.key === 'Enter') menuClick(action);
                  }}
                  role="menuitem"
                  tabIndex={0}
                >
                  {action.label}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
