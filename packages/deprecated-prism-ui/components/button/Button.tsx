import React, { MouseEvent } from 'react';
import './button.scss';

export interface ButtonProps {
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
  /** Makes the button larger and colored $psm-color-primary-500,
   *  which defaults to purple. Overrides small. */
  primary?: boolean;
  /** Makes the button small */
  small?: boolean;
}

export const Button = ({
  'data-testid': testid = '',
  disabled = false,
  label = 'Button',
  linkRef = '',
  onClick = () => {},
  primary = true,
  small = false,
}: ButtonProps) => {
  function buttonClass() {
    if (primary) {
      return 'psm-button--primary';
    }

    if (small) {
      return 'psm-button--small';
    }

    return 'psm-button';
  }
  return (
    <>
      {(!linkRef && (
        <button
          className={buttonClass()}
          data-testid={testid}
          disabled={disabled}
          onClick={onClick}
          type="button"
        >
          {label}
        </button>
      )) || (
        <a
          className={buttonClass()}
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

// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default Button;
