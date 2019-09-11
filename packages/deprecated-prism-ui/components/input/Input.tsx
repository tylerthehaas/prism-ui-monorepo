import React, { MouseEvent, ChangeEvent } from 'react';
import './input.scss';
import './input-group.scss';
import Icon, { IconNames } from '../icon/Icon';

export interface InputProps {
  /** Action that fires when input changes  */
  onChange?: (event?: ChangeEvent<HTMLInputElement>) => void;
  'data-testid'?: string;
  /** Default input value */
  defaultValue: string;
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
  /** Optional text */
  optionalText?: string;
  /** Input placeholder */
  placeholderText?: string;
  /** Indicates if the input is required or not */
  required?: boolean;
}

export interface iconType {
  name: IconNames;
  onClick?: (event?: MouseEvent<HTMLSpanElement>) => void;
  position?: string;
}

const defaultIcon: iconType = {
  name: 'tail-right',
};

export const Input = ({
  onChange = () => {},
  defaultValue = '',
  disabled = false,
  errorText = '',
  icon = defaultIcon,
  infoText = '',
  invalid = false,
  label = '',
  optionalText = '',
  placeholderText = '',
  required = false,
  'data-testid': testid = '',
}: InputProps) => {
  function handleClick(icon: iconType) {
    return (event: MouseEvent<HTMLSpanElement>) => {
      if (icon.onClick) icon.onClick(event);
    };
  }

  return (
    <>
      {label && (
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label className="psm-form__label" htmlFor="psm-input-text">
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
          <button
            aria-label={`${icon.name} icon`}
            className={`psm-icon-svg-${icon.name}`}
            data-testid={`${testid}--icon`}
            onClick={handleClick(icon)}
            style={{
              cursor: icon.onClick ? 'pointer' : 'default',
            }}
            type="button"
          >
            <Icon
              iconName={icon.name}
              height="16px"
              width="16px"
              fill="#707070"
              className={`svg-icon-${icon.name}`}
            />
          </button>
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
          onChange={onChange}
          placeholder={placeholderText}
          required={required}
          spellCheck={false}
          type="text"
          value={defaultValue}
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
