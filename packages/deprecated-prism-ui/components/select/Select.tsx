import React from 'react';
import '../input/input.scss';

export type SelectProps = {
  'data-testid'?: string;
  content: { text: string; value: number | string }[];
  onClick?: (event?: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({
  content = [],
  onClick = () => console.log('Selected'),
  'data-testid': testid = '',
}: SelectProps) => {
  function handleDropdown(index: number) {
    if (index === 0) {
      return (
        <select
          className="psm-input psm-select"
          data-testid={testid}
          key={`select${index}`}
          onChange={onClick}
          tabIndex={0}
        >
          {content.map((contentSection, index) => {
            return (
              <option
                data-testid={`${testid}-option-${index}`}
                key={index}
                value={contentSection.value}
              >
                {contentSection.text}
              </option>
            );
          })}
        </select>
      );
    }
  }

  return (
    <>
      {content.map((contentPiece, index) => {
        return handleDropdown(index);
      })}
    </>
  );
};

export default Select;
