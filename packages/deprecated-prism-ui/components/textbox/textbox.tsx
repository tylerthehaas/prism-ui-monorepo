import React, { useState, ChangeEvent } from 'react';
import uuid from 'uuid/v4';
import './textbox.scss';

export type TextboxProps = {
  /** Maximum number of characters in a string–
   * lets the users know how the character limit if they go over it */
  characterText?: string;
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
  /** Disables the text input */
  disabled?: boolean;
  /** Text that shows when there's an error */
  errorText?: string;
  /** Optional informational text  */
  infoText?: string;
  /** Informs the user that their entry is invalic */
  invalid?: boolean;
  /** Label for the textbox */
  inputLabel?: string;
  /** Maximum number of characters in the textbox */
  maxChars?: number;
  /** Textbox placeholder */
  placeholderText?: string;
  /** Determines if the textbox is required or not */
  required?: boolean;
  /** Event that fires when the text inside changes */
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  /** Optional text to display to users */
  optionalText?: string;
  textAreaId?: string;
  /** Message that displays if a user inputs too much text */
  textTooLongMsg?: string;
};

export type TextboxState = {
  textLength: number;
};

export const Textbox = ({
  characterText = 'Characters',
  className = '',
  'data-testid': testid = '',
  disabled = false,
  errorText = 'Error text',
  infoText = 'infoText',
  invalid = false,
  inputLabel = 'Input label',
  maxChars = 250,
  onChange = () => {},
  placeholderText = 'Placeholder Text',
  required = false,
  optionalText = 'Optional',
  textAreaId = `psm-form__textarea-${uuid}`,
  textTooLongMsg = `Your message is too long. Cut back to ${maxChars} characters.`,
}: TextboxProps) => {
  const [textLength, setMessageLength] = useState<TextboxState['textLength']>(
    0,
  );

  function handleChange(event: ChangeEvent<HTMLTextAreaElement>) {
    onChange(event);
    setMessageLength(event.target.value.length);
  }

  return (
    <>
      {inputLabel && (
        // I think this next line triggers jsx-a11y because it wants the entire component to be nested inside the label, which is not what we want, so I disabled it
        // eslint-disable-next-line jsx-a11y/label-has-for
        <label
          htmlFor={textAreaId}
          className={`psm-form__label ${className}`}
          data-testid={testid}
        >
          {inputLabel}
          {!required && (
            <span className="psm-form__optional">{optionalText}</span>
          )}
          {maxChars && (
            <span
              className={`${
                textLength <= maxChars
                  ? 'psm-form__max-chars'
                  : 'psm-form__max-chars--error'
              }`}
            >
              {`${textLength}/${maxChars} ${characterText}`}
            </span>
          )}
        </label>
      )}
      <textarea
        className={`${
          invalid || maxChars < textLength
            ? 'psm-form__textarea--error'
            : 'psm-form__textarea'
        }`}
        id={textAreaId}
        disabled={disabled}
        onChange={handleChange}
        placeholder={placeholderText}
        required={required}
        aria-describedby={`${textAreaId}-${
          invalid || maxChars < textLength
            ? 'psm-form__error-text'
            : 'psm-form__info-text'
        }`}
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
              : 'psm-form__info-text'
          }`}
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
