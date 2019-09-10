import React, { useState, ReactNode } from 'react';
import uuid from 'uuid/v4';
import Icon from '../icon/Icon';
import './card.scss';
import { Dropdown } from '../dropdown/Dropdown';

interface CardProps {
  /** Title for the card */
  cardTitle?: string;
  /** The content inside the card */
  children: ReactNode;
  'data-testid'?: string;
  date: string | number;
  image?: string;
  imageAlt?: string;
  cardMenu?: Dropdown[] | false;
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
  'data-testid': testid = '',
  date = '',
  image = '',
  imageAlt = '',
  shadowType = 'sm',
  status = '',
}: CardProps) => {
  const [menuOpen, setMenuOpen] = useState<CardState['menuOpen']>(false);

  function handleMenuItemClick(option: Dropdown) {
    if (option.onClick) option.onClick();
    setMenuOpen(false);
  }

  function handleMenuClick() {
    setMenuOpen(!menuOpen);
  }

  return (
    <div className={`psm-card--shadow-${shadowType}`} data-testid={testid}>
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
                  key={uuid()}
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
