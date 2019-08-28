import React, { ChangeEvent } from 'react';
import '../input/input.scss';

interface SelectProps {
  'data-testid'?: string;
  /** Label for the select box */
  selectLabel?: string;
  /** Select options. See notes for type information */
  content: Content[];
  /** Function that fires when the selection is changed */
  onChange?: (event: ChangeEvent<HTMLSelectElement>) => void;
}

interface Content {
  text: string;
  value?: number | string;
}

export const Select = ({
  selectLabel = '',
  content,
  onChange = () => {},
  'data-testid': testid = 'select',
}: SelectProps) => (
  <label htmlFor={testid}>
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
