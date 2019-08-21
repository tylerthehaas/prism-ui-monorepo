import React, { useState } from 'react';
import './chip.scss';
import Icon from '../icon/Icon';

interface ChipProps {
  'data-testid'?: string;
  closeAction: (
    event?:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) => void;
  isOpen?: boolean;
  label: string;
}

interface ChipState {
  open: boolean;
  isSelected: boolean;
}

export const Chip = ({
  closeAction,
  'data-testid': testid = '',
  isOpen = true,
  label,
}: ChipProps) => {
  const [isSelected, setIsSelected] = useState<ChipState['isSelected']>(false);
  const [isChipOpen, setIsChipOpen] = useState<ChipState['open']>(isOpen);

  function handleClick(
    event:
      | React.MouseEvent<HTMLSpanElement, MouseEvent>
      | React.KeyboardEvent<HTMLSpanElement>
      | undefined,
  ) {
    setIsChipOpen(false);
    if (closeAction) closeAction(event);
  }

  return (
    isChipOpen && (
      <div
        className={`psm-chip${isSelected ? '__selected' : ''}`}
        role="button"
        data-testid={testid}
        onClick={() => setIsSelected(isSelected => !isSelected)}
        tabIndex={0}
        onKeyDown={event => {
          if (event.key === 'Enter') {
            setIsSelected(isSelected => !isSelected);
          }
        }}
      >
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
    )
  );
};

// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default Chip;
