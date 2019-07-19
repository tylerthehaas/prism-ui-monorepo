import React from 'react';
import './button.scss';

export interface ButtonProps {
  'data-testid'?: string;
  disabled?: boolean;
  label?: string;
  linkRef?: string;
  onClick?: (
    event?: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;
  primary?: boolean;
  small?: boolean;
}

export const Button = ({
  'data-testid': testid = '',
  disabled = false,
  label = 'Button',
  linkRef = '',
  onClick = event => {},
  primary = true,
  small = false,
}: ButtonProps) => {
  function buttonClassName() {
    let buttonString = ['psm-button'];
    {
      primary
        ? buttonString.push(' psm-button--primary')
        : buttonString.push(' ');
    }
    {
      small && buttonString.push(' psm-button--small');
    }
    return buttonString.join('');
  }

  return (
    <div className="buttons">
      {(!linkRef && (
        <button
          className={buttonClassName()}
          data-testid={testid}
          disabled={disabled}
          onClick={onClick}
          type="button"
        >
          {label}
        </button>
      )) || (
        <a
          className={buttonClassName()}
          data-testid={testid}
          href={linkRef}
          onClick={onClick}
        >
          {label}
        </a>
      )}
    </div>
  );
};

// react-docgen-typescript-loader needs a named export to work,
// but default exports are convenient so we're using both
export default Button;
