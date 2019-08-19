import React from 'react';
import './input.scss';
import './input-group.scss';
import Icon, { IconNames } from '../icon/Icon';

export interface InputProps {
  change?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  'data-testid'?: string;
  disabled?: boolean;
  errorText?: string;
  icon?: iconType;
  infoText?: string;
  invalid?: boolean;
  label?: string;
  optionalText?: string;
  placeholderText?: string;
  required?: boolean;
}

export interface iconType {
  name: IconNames;
  onClick?: (event?: React.MouseEvent<HTMLSpanElement>) => void;
  position?: string;
}

const defaultIcon: iconType = {
  name: 'tail-right',
};

export const Input = ({
  change = () => {},
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
    return (event: React.MouseEvent<HTMLSpanElement>) => {
      if (icon.onClick) icon.onClick(event);
    };
  }

  return (
    <>
      {label && (
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
          className={`psm-input ${invalid ? 'psm-input--error' : ''}`}
          data-testid={testid}
          disabled={disabled}
          id="psm-input-text"
          onChange={change}
          placeholder={placeholderText}
          required={required}
          spellCheck={false}
          type="text"
        />
      </div>
      <div
        className={`${
          invalid ? 'psm-form__error-text' : 'psm-form__info-text'
        }`}
        id="info"
      >
        {infoText || errorText ? `${invalid ? 'error-text' : 'info-text'}` : ''}
      </div>
    </>
  );
};

export default Input;
