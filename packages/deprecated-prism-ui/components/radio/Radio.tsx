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
  isTab: boolean;
}

const defaultButtons: RadioProps['buttons'] = [
  {
    text: 'Option 1',
    checked: true,
  },
  {
    text: 'Option 2',
    checked: false,
  },
];

export const Radio = ({
  'data-testid': testid = '',
  buttons = defaultButtons,
  idPrefix = '',
  name = 'Button',
}: RadioProps) => {
  const [selectedOption, setSelectedOption] = useState<
    RadioState['selectedOption']
  >(0);

  function select(button: Button, idx: number) {
    if (button.onClick) button.onClick();
    setSelectedOption(idx);
  }

  return (
    <>
      {name}
      {buttons.map((button, index) => {
        return (
          <div key={index} onClick={() => select} tabIndex={0}>
            <input
              checked={selectedOption === index}
              className="psm-radio"
              data-testid={`${testid}-${name}-${index}`}
              id={`${idPrefix}-${index}`}
              name={name}
              onChange={() => select(button, index)}
              type="radio"
            />
            <label
              aria-labelledby={button.text}
              className="psm-radio__label"
              id={`${idPrefix}-label-${index}`}
              onClick={() => select(button, index)}
            >
              {button.text}
            </label>
          </div>
        );
      })}
    </>
  );
};

export default Radio;
