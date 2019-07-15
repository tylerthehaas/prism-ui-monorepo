import React, { useState, useRef } from 'react';
import './chip.scss';
import Icon from '../icon/Icon';

interface ChipProps {
  'data-testid'?: string;
  closeAction?: (
    event?:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) => void;
  isClosed?: boolean;
  isSelected?: boolean;
  label: string;
  selectAction?: (
    event?:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) => void;
  show?: boolean;
}

interface ChipState {
  isOpen: false | { isOpen: true; isSelected: boolean };
}

export const Chip = ({
  closeAction = (
    event?:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) => console.log(event, 'Chip closed'),
  'data-testid': testid = '',
  label = 'Empty Chip',
  selectAction = (
    event?:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) => console.log(event, 'Chip action'),
}: ChipProps) => {
  const [isOpen, setIsOpen] = useState<ChipState['isOpen']>({
    isOpen: true,
    isSelected: false,
  });
  const [isSelected, setIsSelected] = useState<ChipState['isOpen']>({
    isOpen: true,
    isSelected: false,
  });

  const chipRef = useRef<HTMLDivElement>(null);

  function handleClose(
    event?:
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) {
    setIsOpen(false);
    if (event) closeAction(event);
  }

  function handleClick(
    event?:
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) {
    setIsSelected({ isOpen: true, isSelected: true });
    if (event) selectAction(event);
  }

  return (
    <>
      {isOpen && (
        <div className={`psm-chip${isSelected ? '--selected' : ''}`}>
          <span
            aria-labelledby={label}
            data-testid={testid}
            role="button"
            onClick={event =>
              !isOpen && isSelected
                ? setIsSelected(!isSelected)
                : handleClick(event)
            }
            onKeyDown={event =>
              !isOpen && isSelected
                ? setIsSelected(!isSelected)
                : handleClick(event)
            }
            onMouseEnter={() => {
              if (chipRef.current) chipRef.current.focus();
            }}
            onMouseLeave={() => {
              if (chipRef.current) chipRef.current.blur();
            }}
            tabIndex={0}
          >
            {label}
          </span>
          <span
            aria-label={`Close ${label} chip`}
            role="button"
            className="psm-chip__close"
            data-testid={`${testid}-icon`}
            onClick={handleClose}
            onKeyDown={handleClose}
            tabIndex={0}
          >
            <Icon iconName="close" height="16px" width="16px" fill="#d4d4d4" />
          </span>
        </div>
      )}
    </>
  );
};

// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default Chip;
