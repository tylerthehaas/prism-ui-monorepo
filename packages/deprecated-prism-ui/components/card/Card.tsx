import React, { useState, ReactNode } from 'react';
import shortid from 'shortid';
import Icon from '../icon/Icon';
import './card.scss';
import { DropdownItem } from '../dropdown/Dropdown';

interface CardProps {
  /** Title for the card */
  cardTitle?: string;
  /** The content inside the card */
  children: ReactNode;
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
  date: string | number;
  image?: string;
  imageAlt?: string;
  cardMenu?: DropdownItem[] | false;
  status?: string;
  /** Determines the size of the shadow beneath the card */
  shadowType?: 'sm' | 'md' | 'lg';
}

interface CardState {
  menuOpen: boolean;
}

export const Card = ({
  cardMenu = false,
  cardTitle = '',
  children,
  className = '',
  'data-testid': testid = '',
  date = '',
  image = '',
  imageAlt = '',
  shadowType = 'sm',
  status = '',
}: CardProps) => {
  const [menuOpen, setMenuOpen] = useState<CardState['menuOpen']>(false);

  function handleMenuItemClick(option: DropdownItem) {
    if (option.onClick) option.onClick();
    setMenuOpen(false);
  }

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div
      className={`psm-card--shadow-${shadowType} ${className}`}
      data-testid={testid}
    >
      <div className="psm-card--top">
        <div className="psm-card--info-block">
          <div className="psm-card--title">{cardTitle}</div>
          <span className="psm-card--information">
            {status && <span className="psm-card--status">{status}</span>}
            {date && <span className="psm-card--date">{date}</span>}
          </span>
        </div>
        {cardMenu && (
          <>
            <button
              className="psm-card--menu-button"
              aria-label="card menu"
              onClick={handleMenuClick}
              type="button"
            >
              <Icon iconName="menu-dots" height="16px" width="16px" />
            </button>
            <ul
              className={
                menuOpen ? 'psm-card--menu-visible' : 'psm-card--menu-hidden'
              }
              role="menu"
            >
              {cardMenu.map(option => (
                /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */
                <li
                  className="psm-card--menu-row"
                  key={shortid.generate()}
                  onClick={() => handleMenuItemClick(option)}
                  role="menuitem"
                  tabIndex={0}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
      <div className="psm-card--content">
        <img className="psm-card--image" src={image} alt={imageAlt} />
        <div className="psm-card--children">{children}</div>
      </div>
    </div>
  );
};
// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default Card;
