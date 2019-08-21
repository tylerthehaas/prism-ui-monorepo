import React, { useState, ChangeEvent } from 'react';
import './textbox.scss';

export type TextboxProps = {
  change?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  'data-testid'?: string;
  disabled?: boolean;
  errorText?: string;
  infoText?: string;
  invalid?: boolean;
  inputLabel?: string;
  maxChars?: number;
  placeholderText?: string;
  required?: boolean;
  optionalText?: string;
  characterText?: string;
  textAreaId?: string;
  textTooLongMsg?: string;
};

export type TextboxState = {
  textLength: number;
};

export const Textbox = ({
  change = () => {},
  'data-testid': testid = '',
  disabled = false,
  errorText = 'Error text',
  infoText = 'infoText',
  invalid = false,
  inputLabel = 'Input label',
  maxChars = 250,
  placeholderText = 'Placeholder Text',
  required = false,
  optionalText = 'Optional',
  characterText = 'Characters',
  textAreaId = `psm-form__textarea-${Math.floor((Math.random() * 100) + 1)}`,
  textTooLongMsg = `Your message is too long. Cut back to ${maxChars} characters.`,
}: TextboxProps) => {
  const [textLength, setMessageLength] = useState<TextboxState['textLength']>(
    0,
  );

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    change(event);
    setMessageLength(event.target.value.length);
  }

  return (
    <>
      {inputLabel && (
        <label htmlFor={textAreaId} className="psm-form__label" data-testid={testid}>
          {inputLabel}
          {!required && <span className="psm-form__optional">{optionalText}</span>}
          {maxChars && (
            <span
              className={`psm-form__max-chars ${textLength <= maxChars ? '' : 'psm-form__max-chars--error'}`}
            >
              {`${textLength}/${maxChars} ${characterText}`}
            </span>
          )}
        </label>
      )}
      <textarea
        className={`psm-form__textarea ${
          invalid || maxChars < textLength
            ? 'psm-form__textarea--error'
            : ''
        }`}
        id={textAreaId}
        disabled={disabled}
        onChange={handleChange}
        placeholder={placeholderText}
        required={required}
        aria-describedby={`${textAreaId}-${
          invalid || maxChars < textLength
            ? 'psm-form__error-text'
            : 'psm-form__info-text'}`}
      />
      {(infoText || errorText) && (
        <div
          className={`${
            invalid || maxChars < textLength
              ? 'psm-form__error-text'
              : 'psm-form__info-text'
          }`}
          id={`${textAreaId}-${
            invalid || maxChars < textLength
              ? 'psm-form__error-text'
              : 'psm-form__info-text'}`}
          aria-live="assertive"
        >
          {invalid
            ? errorText
            : maxChars < textLength
            ? textTooLongMsg
            : infoText}
        </div>
      )}
    </>
  );
};

export default Textbox;
