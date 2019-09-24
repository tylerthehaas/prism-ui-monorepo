import React, { useState, MouseEvent } from 'react';
import uuid from 'uuid/v4';
import './radio.scss';

interface RadioProps {
  /** Radio choices */
  buttons: RadioButton[];
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
  /** Helps link a form together */
  idPrefix?: string;
  /** Name of the radio */
  name: string;
}

interface RadioButton {
  text: string;
  onClick?: (event?: MouseEvent<HTMLInputElement>) => void;
}

interface RadioState {
  selected: number;
}

export const Radio = ({
  buttons = [],
  className = '',
  'data-testid': testid = '',
  idPrefix = '',
  name = '',
}: RadioProps) => {
  const [selected, setSelected] = useState<RadioState['selected']>(0);

  function handleChange(button: RadioButton, index: number) {
    if (button.onClick) button.onClick();
    setSelected(index);
  }

  function handleChecked(index: number) {
    if (index === selected) return true;
    return false;
  }

  return (
    <fieldset className={`psm-radio__group ${className}`}>
      <legend>{name}</legend>
      {buttons.map((button, index) => (
        <div key={uuid()}>
          <label
            className="psm-radio__label"
            htmlFor={`${idPrefix}-${index}`}
            id={`${idPrefix}-label-${index}`}
          >
            <input
              checked={handleChecked(index)}
              className="psm-radio"
              data-testid={`${testid} ${index}`}
              id={`${idPrefix}-${index}`}
              name={name}
              onChange={() => handleChange(button, index)}
              type="radio"
            />

            {button.text}
          </label>
        </div>
      ))}
    </fieldset>
  );
};

export default Radio;
