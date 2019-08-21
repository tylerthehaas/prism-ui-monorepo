import React, {
 useState, KeyboardEvent, MouseEvent,
} from 'react';
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
  onClick?: (event?: MouseEvent<HTMLLIElement>) => void;
}
export interface DropdownState {
  isFocused: number;
  showMenu?: boolean;
}

export const Dropdown = ({
  'data-testid': testid = 'dropdown-label',
  disabled = false,
  dropdownMenu = [],
  label = 'Dropdown Label',
  primary = true,
}: DropdownProps) => {
  const [showMenu, setShowMenu] = useState<DropdownState['showMenu']>(false);

  function menuClick(action: Dropdown) {
    if (action.onClick) action.onClick();
    setShowMenu(!showMenu);
  }

  function handleEscape(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'Escape') {
      setShowMenu(false);
    }
  }

  return (
    <div
      aria-expanded={showMenu}
      aria-haspopup
      className="psm-dropdown__container"
      id={testid}
      aria-label={label}
      onKeyDown={handleEscape}
      role="button"
      tabIndex={0}
    >
      <button
        onBlur={() => setShowMenu(false)}
        className={`psm-dropdown${primary ? '--primary' : ''}`}
        disabled={disabled}
        onClick={() => setShowMenu(!showMenu)}
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
          role="button"
          tabIndex={0}
          onKeyDown={handleEscape}
        >
          <ul
            className="psm-dropdown__ul"
            role="menu"
            id="dropdown-menu-options"
          >
            {dropdownMenu.map((action, index) => (
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
              ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
