import React, { useState, KeyboardEvent, MouseEvent } from 'react';
import './chip.scss';
import Icon from '../icon/Icon';

interface ChipProps {
  /** Custom class name for component */
  className?: string;
  /** Action that fires when the chip is closed */
  closeAction: (
    event?: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>,
  ) => void;
  'data-testid'?: string;
  /** Text inside the chip */
  label: string;
}

interface ChipState {
  isOpen: boolean;
  isSelected: boolean;
}

export const Chip = ({
  className = '',
  closeAction,
  'data-testid': testid = '',
  label,
}: ChipProps) => {
  const [isSelected, setIsSelected] = useState<ChipState['isSelected']>(false);
  const [isOpen, setIsOpen] = useState<ChipState['isOpen']>(true);

  function handleClick(
    event:
      | MouseEvent<HTMLSpanElement>
      | KeyboardEvent<HTMLSpanElement>
      | undefined,
  ) {
    setIsOpen(false);
    if (closeAction) closeAction(event);
  }

  return (
    isOpen && (
      <div
        onClick={() => setIsSelected(isSelected => !isSelected)}
        className={`psm-chip${isSelected ? '__selected' : ''} ${className}`}
        role="button"
        data-testid={testid}
        tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            setIsSelected(isSelected => !isSelected);
          }
        }}
      >
        <div className="psm-chip--interior">
          {label}
          <button
            aria-label={`Close ${label} chip`}
            type="button"
            className="psm-chip__close"
            data-testid={`${testid}-icon`}
            onClick={handleClick}
          >
            <Icon iconName="close" height="16px" width="16px" fill="#d4d4d4" />
          </button>
        </div>
      </div>
    )
  );
};

// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default Chip;
