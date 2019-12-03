import React, { useState } from 'react';
import './list.scss';
import shortid from 'shortid';
import Icon from '../icon/Icon';
import { DropdownItem } from '../dropdown/Dropdown';

interface ListProps {
  /** Custom class name for component */
  className?: string;
  listItems: ListItem[];
  /** A dropdown menu on the side of the list item. If empty, nothing will appear */
  menu?: DropdownItem[];
}

interface ListItem {
  /** The things that will go in your list */
  content: string;
  /** String to indicate when this thing happened. If empty, nothing will appear */
  age?: string;
}

interface ListState {
  activeItem: number;
  menuOpen: boolean;
  hoverState: boolean;
}

export default ({ className = '', listItems = [], menu = [] }: ListProps) => {
  const [menuOpen, setMenuOpen] = useState<ListState['menuOpen']>(false);
  const [hoverState, setHoverState] = useState<ListState['hoverState']>(true);
  const [activeItem, setActiveItem] = useState<ListState['activeItem']>(0);

  function handleMenuItemClick(option: DropdownItem) {
    if (option.onClick) option.onClick();
    setMenuOpen(false);
  }

  function handleMenuClick(index: number) {
    setMenuOpen(!menuOpen);
    setActiveItem(index);
  }

  // needed for correct z-indexing
  const listLength = listItems.length;

  return (
    <ul className={`psm-list ${className}`}>
      {listItems.map((item, index) => (
        <li
          key={shortid()}
          className={hoverState ? 'psm-list--row-hover' : 'psm-list--row'}
        >
          {item.content}
          <span
            className="psm-list--info-block"
            onMouseEnter={() => setHoverState(false)}
            onMouseLeave={() => setHoverState(true)}
            tabIndex={-1}
          >
            {item.age}{' '}
            {menu && (
              <>
                <button
                  aria-label="list menu"
                  className="psm-list--menu-button"
                  onBlur={event => {
                    if (event.relatedTarget === null) setMenuOpen(false);
                  }}
                  onClick={() => handleMenuClick(index)}
                  tabIndex={0}
                  type="button"
                >
                  <Icon iconName="menu-dots" fill="black" />
                </button>
                <ul
                  className={`psm-list--menu
                    ${
                      menuOpen && index === activeItem
                        ? 'psm-list-visible'
                        : 'psm-list-hidden'
                    }
                  `}
                  role="menu"
                >
                  {menu.map(option => (
                    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
                    <li
                      className="psm-list--menu-row"
                      key={shortid.generate()}
                      onClick={() => handleMenuItemClick(option)}
                      role="menuitem"
                      tabIndex={0}
                      style={{ zIndex: listLength - index }}
                    >
                      {option.label}
                    </li>
                  ))}
                </ul>
              </>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
};
