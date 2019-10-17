import React, {
  useState,
  useEffect,
  KeyboardEvent,
  MouseEvent,
  ReactNode,
} from 'react';
import uuid from 'uuid/v4';
import './dropdown.scss';
import Icon from '../icon/Icon';

export interface DropdownProps {
  /** Use this if you want something besides a button tag to have a dropdown */
  children?: ReactNode;
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
  /** splits the button and the arrow into two different css classes. See Figma -> Prism Library -> Buttons for a representation */
  dualAction?: boolean;
  /** Disables the button and grays it out */
  disabled?: boolean;
  /** See notes for details on details for the type */
  dropdownMenu: DropdownItem[];
  /** The text inside the dropdown */
  label?: string;
  /** Primary makes the button larger and colored $psm-color-primary-500, which defaults to purple,
   * text removes the button and leaves just styled text, and normal makes the button normal
   */
  buttonStyle?: 'primary' | 'text' | 'menu';
}

export interface DropdownItem {
  label: string;
  onClick: (event?: MouseEvent<HTMLLIElement | HTMLDivElement>) => void;
}

export interface DropdownState {
  activeOption: number;
  dualActionChoice: DropdownItem;
  showMenu: boolean;
}

export const Dropdown = ({
  children = false,
  className = '',
  'data-testid': testid = 'dropdown-label',
  disabled = false,
  dropdownMenu = [],
  dualAction = false,
  label = 'Dropdown Label',
  buttonStyle = 'primary',
}: DropdownProps) => {
  const [showMenu, setShowMenu] = useState<DropdownState['showMenu']>(false);
  const [activeOption, setActiveOption] = useState<
    DropdownState['activeOption']
  >(-1);
  const [dualActionChoice, setDualActionChoice] = useState<
    DropdownState['dualActionChoice']
  >(dropdownMenu[0]);

  function menuClick(dropdown: DropdownItem) {
    if (!dualAction && dropdown && dropdown.onClick) {
      dropdown.onClick();
    }

    setDualActionChoice(dropdown);
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

  function handleOptions() {
    switch (buttonStyle) {
      case 'primary':
        return '--primary';
      case 'text':
        return '--text';
      case 'menu':
        return '--menu';
      default:
        return '';
    }
  }

  function handleArrowFill() {
    switch (buttonStyle) {
      case 'primary':
        return 'white';
      case 'text':
        return '#0066ED';
      default:
        return 'black';
    }
  }

  const buttonContainer = () => {
    if (children) {
      return (
        <button
          className="psm-dropdown-child"
          onBlur={() => setShowMenu(false)}
          onClick={() => setShowMenu(!showMenu)}
          role="button"
          tabIndex={0}
        >
          {children}
        </button>
      );
    }

    if (dualAction) {
      return (
        <span className="psm-dropdown-dual">
          <button
            className={`psm-dropdown${handleOptions()} ${className}`}
            disabled={disabled}
            onClick={() => {
              if (dualActionChoice.onClick) {
                dualActionChoice.onClick();
              }
            }}
            tabIndex={0}
            type="button"
          >
            {dualActionChoice.label}
          </button>
          {/* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
          <button
            aria-label="dropdown-menu"
            className={`psm-dropdown-dual-svg${handleOptions()}`}
            disabled={disabled}
            onClick={() => setShowMenu(!showMenu)}
            tabIndex={0}
            type="button"
          >
            <Icon
              height="16px"
              width="16px"
              iconName="small-triangle-down"
              fill={handleArrowFill()}
            />
          </button>
        </span>
      );
    }
    return (
      <button
        className={`psm-dropdown${handleOptions()}`}
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
          fill={handleArrowFill()}
        />
      </button>
    );
  };

  useEffect(() => {
    if (!children) {
      function checkForFocus(event: any) {
        if (!event.target.className.toString().includes('psm-dropdown'))
          setShowMenu(false);
      }
      document.addEventListener('mousedown', checkForFocus, false);
      return () =>
        document.removeEventListener('mousedown', checkForFocus, false);
    }
  });

  useEffect(() => {
    if (!dualAction) setActiveOption(-1);
  }, [dualAction]);

  return (
    <div
      aria-expanded={showMenu}
      aria-haspopup
      aria-label={children ? '' : label}
      className={`${
        children
          ? 'psm-dropdown__container--children'
          : 'psm-dropdown__container'
      }`}
      id={testid}
      onKeyDown={handleKeyboard}
      role="button"
      tabIndex={-1}
    >
      {buttonContainer()}
      <ul
        className={`${
          children ? 'psm-dropdown__menu--children' : 'psm-dropdown__menu'
        } ${showMenu ? 'psm-dropdown-visible' : 'psm-dropdown-hidden'}`}
        onBlur={() => setShowMenu(false)}
        role="menu"
        id="dropdown-menu-options"
      >
        {dropdownMenu.map((dropdown, index) => (
          // eslint-disable-next-line jsx-a11y/click-events-have-key-events
          <li
            aria-labelledby="dropdown-menu-options"
            className={
              activeOption === index
                ? 'psm-dropdown-focused '
                : 'psm-dropdown__li'
            }
            data-testid={`${testid}-option-${index}`}
            key={uuid()}
            onClick={() => {
              menuClick(dropdown);
              setShowMenu(false);
            }}
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
