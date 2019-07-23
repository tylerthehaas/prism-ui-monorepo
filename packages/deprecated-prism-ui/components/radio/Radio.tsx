import React, { useState } from 'react';
import './radio.scss';

export interface RadioProps {
  buttons: Button[];
  'data-testid'?: string;
  idPrefix?: string;
  name: string;
}

export interface Button {
  text: string;
  onClick?: (event?: React.MouseEvent<HTMLInputElement>) => void;
  checked: boolean;
}

interface RadioState {
  selectedOption?: number;
}

export const Radio = ({
  'data-testid': testid = '',
  buttons = [],
  idPrefix = '',
  name = '',
}: RadioProps) => {
  const [selectedOption, setSelectedOption] = useState<
    RadioState['selectedOption']
  >(0);

  function select(button: Button, idx: number) {
    if (button.onClick) button.onClick();
    setSelectedOption(idx);
  }

  return (
    <fieldset
      className="psm-radio__group"
    >
      <legend>{name}</legend>
      {buttons.map((button, index) => {
        return (
          <div key={index}>
            <input
              checked={selectedOption === index}
              className="psm-radio"
              data-testid={`${testid}-${name}-${index}`}
              id={`${idPrefix}-${index}`}
              name={name}
              onChange={select.bind({}, button, index)}
              type="radio"
            />
            <label
              className="psm-radio__label"
              htmlFor={`${idPrefix}-${index}`}
              id={`${idPrefix}-label-${index}`}
            >
              {button.text}
            </label>
          </div>
        );
      })}
    </fieldset>
  );
};

export default Radio;
