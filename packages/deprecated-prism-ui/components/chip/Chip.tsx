import React from 'react';
import './chip.scss';
import Icon from '../icon/Icon';

interface ChipProps {
  'data-testid'?: string;
  closeAction: (
    event?:
      | React.MouseEvent<HTMLSpanElement>
      | React.KeyboardEvent<HTMLSpanElement>,
  ) => void;
  isOpen: boolean;
  label: string;
}

export const Chip = ({
  closeAction,
  'data-testid': testid = '',
  isOpen,
  label,
}: ChipProps) => {
  const [isSelected, setIsSelected] = React.useState<boolean>(false);
  return (
    isOpen && (
      <div className={`psm-chip${isSelected ? '--selected' : ''}`}>
        <button
          className="chip-button"
          type="button"
          data-testid={testid}
          onClick={() => setIsSelected(isSelected => !isSelected)}
        >
          {label}
        </button>
        <button
          aria-label={`Close ${label} chip`}
          type="button"
          className="psm-chip__close"
          data-testid={`${testid}-icon`}
          onClick={closeAction}
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
