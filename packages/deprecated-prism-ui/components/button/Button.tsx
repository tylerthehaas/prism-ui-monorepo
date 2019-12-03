import React, { MouseEvent } from 'react';
import './button.scss';

export interface ButtonProps {
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
  /** Disables the button and grays it out.
   * Only works if there is no linkRef or associated action */
  disabled?: boolean;
  /** The text inside the button */
  label?: string;
  /** If the button is a link, add the url here */
  linkRef?: string;
  /** Function that fires when the button is clicked.
   * Accepts MouseEvent<HTMLButtonElement | HTMLAnchorElement>  */
  onClick?: (event?: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  /** Primary makes the button larger and colored $psm-color-primary-500, which defaults to purple,
   * text removes the button and leaves just styled text, and small makes the button small
   */
  buttonStyle?: 'primary' | 'text' | 'menu';
}

export default ({
  className = '',
  'data-testid': testid = '',
  disabled = false,
  label = 'Button',
  linkRef = '',
  onClick = () => {},
  buttonStyle = 'primary',
}: ButtonProps) => {
  function handleOptions() {
    switch (buttonStyle) {
      case 'primary':
        return '--primary';
      case 'text':
        return '--text';
      case 'menu':
        return '--menu';
      default:
        return '';
    }
  }
  return (
    <>
      {(!linkRef && (
        <button
          className={`psm-button${handleOptions()} ${className}`}
          data-testid={testid}
          disabled={disabled}
          onClick={onClick}
          type="button"
        >
          {label}
        </button>
      )) || (
        <a
          className={`psm-button${handleOptions()}`}
          data-testid={testid}
          href={linkRef}
          onClick={onClick}
        >
          {label}
        </a>
      )}
    </>
  );
};
