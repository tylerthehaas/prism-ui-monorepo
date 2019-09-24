import React, { useState, useEffect, ChangeEvent } from 'react';
import './input.scss';
import './input-group.scss';
import Icon, { IconNames } from '../icon/Icon';

export interface InputProps {
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
  /** Disables the input */
  disabled?: boolean;
  /** Text to display when there's an error in the input */
  errorText?: string;
  /** Icon at the end of the input */
  icon?: iconType;
  /** If true, turns the input red */
  invalid?: boolean;
  /** Informational text below the input */
  infoText?: string;
  /** Input label */
  label?: string;
  /** Action that fires when input changes  */
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
  /** Optional text */
  optionalText?: string;
  /** Input placeholder */
  placeholderText?: string;
  /** Indicates if the input is required or not */
  /** Pre-filled input value */
  prefilledValue?: string;
  required?: boolean;
}

export interface iconType {
  name: IconNames;
  position?: string;
}

interface InputState {
  inputText: string;
}

const defaultIcon: iconType = {
  name: 'tail-right',
};

export const Input = ({
  className = '',
  disabled = false,
  errorText = '',
  icon = defaultIcon,
  infoText = '',
  invalid = false,
  label = '',
  onChange = () => {},
  optionalText = '',
  placeholderText = '',
  prefilledValue = '',
  required = false,
  'data-testid': testid = '',
}: InputProps) => {
  const [inputText, setInputText] = useState<InputState['inputText']>(
    prefilledValue,
  );

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    if (onChange) onChange(event);
    setInputText(event.target.value);
  }

  useEffect(() => {
    setInputText(prefilledValue);
  }, [prefilledValue]);

  return (
    <>
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label
          className={`psm-form__label ${className}`}
          htmlFor="psm-input-text"
        >
          {label}
          {!required && (
            <span className="psm-form__optional">{optionalText}</span>
          )}
        </label>
      )}
      <div
        className={icon ? `psm-input-${icon.position || 'trailing'}-icon` : ''}
      >
        {icon && (
          <span
            aria-label={`${icon.name} icon`}
            className={`psm-icon-svg-${icon.name}`}
            data-testid={`${testid}--icon`}
          >
            <Icon
              iconName={icon.name}
              height="16px"
              width="16px"
              fill="#707070"
              className={`svg-icon-${icon.name}`}
            />
          </span>
        )}
        <input
          aria-describedby="info"
          aria-label={`${label ? '' : 'input'}`}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          className={`psm-input${invalid ? '--error' : ''}`}
          data-testid={testid}
          disabled={disabled}
          id="psm-input-text"
          onChange={handleChange}
          placeholder={placeholderText}
          required={required}
          spellCheck={false}
          type="text"
          value={inputText}
        />
      </div>
      <div
        className={`${
          invalid ? 'psm-form__error-text' : 'psm-form__info-text'
        }`}
        id="info"
      >
        {infoText || errorText ? `${invalid ? errorText : infoText}` : ''}
      </div>
    </>
  );
};

export default Input;
