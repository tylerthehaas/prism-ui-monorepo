import React, { ChangeEvent } from 'react';
import '../input/input.scss';

interface SelectProps {
  /** Custom class name for component */
  className?: string;
  /** Select options. See notes for type information */
  content: Content[];
  'data-testid'?: string;
  /** Function that fires when the selection is changed */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
  /** Label for the select box */
  selectLabel?: string;
}

interface Content {
  text: string;
  value?: number | string;
}

export const Select = ({
  className = '',
  content,
  'data-testid': testid = 'select',
  onChange = () => {},
  selectLabel = '',
}: SelectProps) => (
  <label className={`${className}`} htmlFor={testid}>
    {selectLabel}
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
  </label>
);

export default Select;
