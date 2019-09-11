import React, { ReactNode, useState, useEffect, MouseEvent } from 'react';
import './alert.scss';
import Icon from '../icon/Icon';

interface AlertProps {
  /** Optional short, bolded message that precedes the actual alert */
  alertPrefix?: string;
  /** Alert type determines alert color */
  alertType?: 'error' | 'info' | 'success' | 'warning';
  /** Alert content */
  children: ReactNode;
  'data-testid'?: string;
  /** Called when an alert is dismissed */
  onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void;
  /** Allows the alert to be called again after being dismissed */
  recurrent?: boolean;
}

interface AlertState {
  dismissed: boolean;
}

const Alert = ({
  alertPrefix = '',
  alertType = 'info',
  children,
  'data-testid': testid = 'alert',
  onDismiss = () => {},
  recurrent = false,
}: AlertProps) => {
  const [dismissed, setDismissed] = useState<AlertState['dismissed']>(false);

  function handleDismiss(event: MouseEvent<HTMLButtonElement>) {
    if (onDismiss) onDismiss(event);
    setDismissed(true);
  }

  useEffect(() => {
    if (recurrent) setDismissed(false);
  }, [dismissed, recurrent]);

  function changeSvgColor(alertType: 'error' | 'info' | 'success' | 'warning') {
    switch (alertType) {
      case 'warning':
        return '#bd5316';
      case 'error':
        return '#d70e16';
      case 'info':
        return '#0066ed';
      case 'success':
        return '#0f7d52';
      default:
        return '';
    }
  }

  return (
    <>
      {!dismissed && (
        <div
          aria-live="assertive"
          className={`psm-alert--${alertType}`}
          data-testid={testid}
          role="alert"
        >
          <div className="psm-alert__msg" id="alert-msg">
            <span className="psm-alert__prefix">{alertPrefix}</span> {children}
          </div>
          <button
            aria-label="Close alert"
            className="psm-alert__close"
            data-testid={`${testid}-icon`}
            id="alert-nub-close"
            onClick={handleDismiss}
            type="button"
          >
            <Icon
              iconName="close"
              height="16px"
              width="16px"
              fill={changeSvgColor(alertType)}
            />
          </button>
        </div>
      )}
    </>
  );
};

export default Alert;
