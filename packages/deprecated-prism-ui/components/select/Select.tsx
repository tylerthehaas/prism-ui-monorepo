import React from 'react';
import '../input/input.scss';

export type SelectProps = {
  'data-testid'?: string;
  selectLabel?: string;
  content: { text: string; value: number | string }[];
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Select = ({
  selectLabel = '',
  content,
  onChange = () => {},
  'data-testid': testid = '',
}: SelectProps) => (
    <>
      <label htmlFor={testid}>{selectLabel}</label>
      {/* eslint-disable-next-line jsx-a11y/no-onchange */}
      <select
        aria-label="select"
        className="psm-input psm-select"
        data-testid={testid}
        id={testid}
        key={`select${testid}`}
        onChange={onChange}
        tabIndex={0}
      >
        {content.map((contentSection, index) => (
            <option
              data-testid={`${testid}-option-${index}`}
              key={index}
              value={contentSection.value}
            >
              {contentSection.text}
            </option>
          ))}
      </select>
    </>
  );

export default Select;
