import React, { useState } from 'react';
import FocusLock from 'react-focus-lock';
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

export interface InputState {
  isClicked: boolean;
}

export const Input = ({
  change = () => {},
  disabled = false,
  errorText = '',
  icon = defaultIcon,
  infoText = '',
  invalid = false,
  label = '',
  placeholderText = 'Input Text Here',
  required = true,
  'data-testid': testid = '',
}: InputProps) => {
  const [isClicked, setIsClicked] = useState<InputState['isClicked']>(false);
  return (
    <FocusLock>
      {(icon && (
        <>
          {label && (
            <div className="psm-form__label">
              {label}
              {!required && (
                <span className="psm-form__optional">Optional</span>
              )}
            </div>
          )}
          <div className={`psm-input-${icon.position || 'trailing'}-icon`}>
            <span
              aria-label={`${icon.name} icon`}
              className={`psm-icon-svg-${icon.name}`}
              data-testid={`${testid}--icon`}
              onClick={e => {
                if (icon.onClick) icon.onClick(e);
              }}
              style={{
                cursor: icon.onClick ? 'pointer' : 'default',
              }}
              tabIndex={0}
            >
              {console.log(icon)}
              <Icon
                iconName={icon.name}
                height="16px"
                width="16px"
                fill="#707070"
                className={`svg-icon-${icon.name}`}
              />
            </span>
            <input
              aria-labelledby="Input field"
              className={`psm-input ${isClicked ? 'psm-input--clicked' : ''} ${
                invalid ? 'psm-input--error' : ''
              }`}
              data-testid={testid}
              disabled={disabled}
              onBlur={() => setIsClicked(false)}
              onChange={change}
              onClick={() => setIsClicked(true)}
              placeholder={placeholderText}
              required={required}
              type="text"
            />
          </div>
          {(infoText || errorText) && (
            <div
              className={`${
                invalid ? 'psm-form__error-text' : 'psm-form__info-text'
              }`}
            >
              {invalid ? errorText : infoText}
            </div>
          )}
        </>
      )) || (
        <>
          {label && (
            <div className="psm-form__label">
              {label}
              {!required && (
                <span className="psm-form__optional">Optional</span>
              )}
            </div>
          )}
          <input
            aria-labelledby="Input field"
            className={`psm-input${invalid ? ' psm-input--active' : ''} ${
              isClicked ? 'psm-input--clicked' : ''
            } ${invalid ? 'psm-input--error' : ''}`}
            data-testid={testid}
            disabled={disabled}
            onBlur={() => setIsClicked(false)}
            onChange={change}
            onClick={() => setIsClicked(true)}
            placeholder={placeholderText}
            required={required}
            type="text"
          />
          {(infoText || errorText) && (
            <div
              className={`${
                invalid ? 'psm-form__error-text' : 'psm-form__info-text'
              }`}
            >
              {invalid ? errorText : infoText}
            </div>
          )}
        </>
      )}
    </FocusLock>
  );
};

export default Input;
