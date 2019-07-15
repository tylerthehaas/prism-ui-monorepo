import React, { useState, useEffect } from 'react';
import './textbox.scss';

export type TextboxProps = {
  change?(event: any): any;
  'data-testid'?: string;
  disabled?: boolean;
  errorText?: string;
  infoText?: string;
  invalid?: boolean;
  label?: string;
  maxChars: number;
  placeholderText?: string;
  required?: boolean;
};

export type TextboxState = {
  invalidState: boolean;
  isClicked: boolean;
  textLength: number;
};

export const Textbox = ({
  change = () => {},
  'data-testid': testid = '',
  disabled = false,
  errorText = 'Error text',
  infoText = 'infoText',
  invalid = false,
  label = 'Input label',
  maxChars = 250,
  placeholderText = 'Placeholder Text',
  required = false,
}: TextboxProps) => {
  const [invalidState, setInvalidState] = useState<
    TextboxState['invalidState']
  >(invalid);
  const [isClicked, setIsClicked] = useState<TextboxState['isClicked']>(false);
  const [textLength, setMessageLength] = useState<TextboxState['textLength']>(
    0,
  );

  useEffect(() => {
    setInvalidState(invalid);
  });

  const textTooLong = `Your message is too long. Cut back to ${maxChars} characters.`;

  function handleChange(event: any) {
    change(event);
    setMessageLength(event.target.value.length);
  }

  return (
    <>
      {label && (
        <div className="psm-form__label" data-testid={testid}>
          {label}
          {!required && <span className="psm-form__optional">Optional</span>}
          {maxChars && (
            <span
              className={`psm-form__max-chars ${maxChars < textLength &&
                'psm-form__max-chars--error'}`}
            >
              {`${textLength}/${maxChars} Characters`}
            </span>
          )}
        </div>
      )}
      <textarea
        className={`psm-form__textarea ${
          isClicked ? 'psm-form__textarea--clicked' : ''
        } ${
          invalidState || maxChars < textLength
            ? 'psm-form__textarea--error'
            : ''
        }`}
        disabled={disabled}
        onBlur={() => setIsClicked(false)}
        onChange={handleChange}
        onClick={() => setIsClicked(true)}
        placeholder={placeholderText}
        required={required}
      />
      {(infoText || errorText) && (
        <div
          className={`${
            invalidState || maxChars < textLength
              ? 'psm-form__error-text'
              : 'psm-form__info-text'
          }`}
        >
          {invalidState
            ? errorText
            : maxChars < textLength
            ? textTooLong
            : infoText}
        </div>
      )}
    </>
  );
};

export default Textbox;
