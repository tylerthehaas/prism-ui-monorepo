import React from 'react';
import '../input/input.scss';

export type SelectProps = {
  'data-testid'?: string;
  selectLabel?: string;
  content: { text: string; value: number | string }[];
  onClick?: (event?: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({
  selectLabel = '',
  content = [],
  onClick = () => console.log('Selected'),
  'data-testid': testid = '',
}: SelectProps) => {
  return (
    <div>
      <label htmlFor={testid}>{selectLabel}</label>
      <select
        className="psm-input psm-select"
        data-testid={testid}
        id={testid}
        key={`select${testid}`}
        onChange={onClick}
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
    </div>
  );
};

export default Select;
