import React, { useState, FocusEvent } from 'react';
import '../button/button.scss';
import Icon from '../icon/Icon';

export interface DropdownProps {
  'data-testid'?: string;
  disabled?: boolean;
  dropdownMenu: Dropdown[];
  idPrefix?: string;
  label?: string;
  primary?: boolean;
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
  'data-testid': testid = 'dropdown-label',
  disabled = false,
  dropdownMenu = defaultDropdown,
  label = 'Dropdown Label',
  primary = true,
}: DropdownProps) => {
  const [showMenu, setShowMenu] = useState<DropdownState['showMenu']>(false);

  function menuClick(action: Dropdown) {
    if (action.onClick) action.onClick();
    setShowMenu(!showMenu);
  }

  function blurFunction(event: FocusEvent<HTMLDivElement>) {
    const { currentTarget } = event;

    setTimeout(() => {
      if (!currentTarget.contains(document.activeElement)) {
        setShowMenu(false);
      }
    }, 0);
  }

  function handleEscape(event: React.KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      setShowMenu(false);
    }
  }

  function handleClick() {
    setShowMenu(!showMenu);
  }

  return (
    <div onBlur={blurFunction} className="psm-dropdown__container" id={testid}>
      <button
        aria-labelledby={testid}
        className={`psm-dropdown${primary ? '--primary' : ''}`}
        data-testid={testid}
        disabled={disabled}
        onClick={handleClick}
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
      {showMenu && (
        <div
          aria-label="dropdown-menu"
          className="psm-dropdown__menu"
          onKeyDown={handleEscape}
          role="button"
          tabIndex={0}
        >
          <ul
            className="psm-dropdown__ul"
            role="menu"
            id="dropdown-menu-options"
          >
            {dropdownMenu.map((action, index) => {
              return (
                <li
                  aria-labelledby="dropdown-menu-options"
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
