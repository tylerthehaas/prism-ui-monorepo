import React, { useState, useEffect, KeyboardEvent, MouseEvent } from 'react';
import uuid from 'uuid/v4';
import './dropdown.scss';
import Icon from '../icon/Icon';

export interface DropdownProps {
  'data-testid'?: string;
  /** splits the button and the arrow into two different css classes. See Figma -> Prism Library -> Buttons for a representation */
  dualAction?: boolean;
  /** If you're using a dual-action button, this function fires when the primary button is clicked */
  dualOnClick?: () => void;
  /** Disables the button and grays it out */
  disabled?: boolean;
  /** See notes for details on details for the type */
  dropdownMenu: Dropdown[];
  /** The text inside the dropdown */
  label?: string;
  /** Makes the button larger and colored $psm-color-primary-500, which defaults to purple */
  primary?: boolean;
}

export interface Dropdown {
  label: string;
  onClick?: (event?: MouseEvent<HTMLLIElement | HTMLDivElement>) => void;
}

export interface DropdownState {
  activeOption: number;
  showMenu: boolean;
}

export const Dropdown = ({
  'data-testid': testid = 'dropdown-label',
  disabled = false,
  dropdownMenu = [],
  dualAction = false,
  dualOnClick = () => {},
  label = 'Dropdown Label',
  primary = true,
}: DropdownProps) => {
  const [showMenu, setShowMenu] = useState<DropdownState['showMenu']>(false);
  const [activeOption, setActiveOption] = useState<
    DropdownState['activeOption']
  >(-1);

  function menuClick(action: Dropdown) {
    if (action && action.onClick) {
      action.onClick();
    }
    setShowMenu(false);
  }

  function handleEscape() {
    setShowMenu(false);
  }

  function handleArrowDown() {
    if (dropdownMenu[activeOption + 1]) {
      return setActiveOption(activeOption + 1);
    }
    return setActiveOption(0);
  }

  function handleArrowUp() {
    if (dropdownMenu[activeOption - 1]) {
      return setActiveOption(activeOption - 1);
    }
    return setActiveOption(dropdownMenu.length - 1);
  }

  function handleKeyboard(
    event: KeyboardEvent<HTMLDivElement | HTMLLIElement>,
  ) {
    switch (event.key) {
      case 'Escape':
        handleEscape();
        break;
      case ' ':
      case 'Enter':
        menuClick(dropdownMenu[activeOption]);
        setShowMenu(!showMenu);
        break;
      case 'ArrowDown':
        event.preventDefault();
        handleArrowDown();
        break;
      case 'ArrowUp':
        event.preventDefault();
        handleArrowUp();
        break;
      case 'Tab':
        break;
      default:
        event.preventDefault();
        break;
    }
  }

  const buttonContainer = () => {
    if (dualAction)
      return (
        <span className="psm-dropdown-dual">
          <button
            className={`psm-dropdown${primary ? '--primary' : ''}`}
            disabled={disabled}
            onClick={() => (dualOnClick ? dualOnClick() : {})}
            tabIndex={0}
            type="button"
          >
            {label}
          </button>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <span
            aria-label="dropdown-menu"
            className={`psm-dual-svg${primary ? '--primary' : ''}`}
            role="button"
            onClick={() => setShowMenu(!showMenu)}
            tabIndex={0}
          >
            <Icon
              fill="white"
              height="16px"
              width="16px"
              iconName="small-triangle-down"
            />
          </span>
        </span>
      );
    return (
      <button
        className={`psm-dropdown${primary ? '--primary' : ''}`}
        disabled={disabled}
        onClick={() => setShowMenu(!showMenu)}
        type="button"
        tabIndex={0}
      >
        {label}
        <Icon
          iconName="small-triangle-down"
          height="16px"
          width="16px"
          fill="white"
        />
      </button>
    );
  };

  useEffect(() => {
    setActiveOption(-1);
  }, [showMenu]);

  return (
    <div
      aria-expanded={showMenu}
      aria-haspopup
      aria-label={label}
      className="psm-dropdown__container"
      id={testid}
      onBlur={() => setShowMenu(false)}
      onKeyDown={handleKeyboard}
      role="button"
      tabIndex={0}
    >
      {buttonContainer()}
      <ul
        className={`psm-dropdown__menu ${
          showMenu ? 'psm-dropdown-visible' : 'psm-dropdown-hidden'
        }`}
        role="menu"
        id="dropdown-menu-options"
      >
        {dropdownMenu.map((dropdown, index) => (
          <li
            aria-labelledby="dropdown-menu-options"
            className={
              activeOption === index
                ? 'psm-dropdown-focused '
                : 'psm-dropdown__li'
            }
            data-testid={`${testid}-option-${index}`}
            key={uuid()}
            onClick={() => menuClick(dropdown)}
            onKeyDown={handleKeyboard}
            role="menuitem"
          >
            {dropdown.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
