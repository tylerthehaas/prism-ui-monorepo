import React, { ReactNode, useState, MouseEvent } from 'react';
import './alert.scss';
import Icon from '../icon/Icon';

interface AlertProps {
  /** Alert type determines alert color */
  alertType?: 'error' | 'info' | 'success' | 'warning';
  children: ReactNode;
  'data-testid'?: string;
  /** Called when an alert is dismissed */
  onDismiss?: (event: MouseEvent<HTMLButtonElement>) => void;
}

interface AlertState {
  dismissed: boolean;
}

const Alert = ({
  alertType = 'info',
  'data-testid': testid = 'alert',
  onDismiss,
  children,
}: AlertProps) => {
  const [dismissed, setDismissed] = useState<AlertState['dismissed']>(false);

  function handleDismiss(event: React.MouseEvent<HTMLButtonElement>) {
    if (typeof onDismiss === 'function') {
      onDismiss(event);
    }
    setDismissed(true);
  }

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
            {children}
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
