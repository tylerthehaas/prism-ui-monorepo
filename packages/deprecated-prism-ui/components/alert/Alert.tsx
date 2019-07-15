import React, { ReactNode, useState } from 'react';
import './alert.scss';
import Icon from '../icon/Icon';

enum AlertType {
  Error = 'error',
  Info = 'info',
  Success = 'success',
  Warning = 'warning',
}

interface AlertProps {
  /** Alert type determines alert color */
  alertType?: AlertType;
  children: ReactNode;
  'data-testid'?: string;
  /** Called when an alert is dismissed */
  onDismiss: (
    event?: React.MouseEvent<HTMLSpanElement | HTMLDivElement>,
  ) => void;
}

interface AlertState {
  dismissed: boolean;
}

const Alert = ({
  alertType = AlertType.Info,
  'data-testid': testid = 'alert',
  onDismiss,
  children,
}: AlertProps) => {
  const [dismissed, setDismissed] = useState<AlertState['dismissed']>(false);

  function handleDismiss(
    event: React.MouseEvent<HTMLSpanElement, MouseEvent> | undefined,
  ) {
    onDismiss(event);
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
          className={`psm-alert psm-alert--${alertType}`}
          data-testid={testid}
          role="alert"
        >
          <div className="psm-alert__not-nub" id="alert-not-nub">
            <span>{children}</span>
          </div>
          <div
            className="psm-alert__nub"
            id="alert-nub-close"
            onClick={onDismiss}
          >
            <div className="psm-alert__close">
              <span
                onClick={handleDismiss}
                aria-label="Close alert"
                className="psm-icon-simple-remove"
                data-testid={`${testid}-icon`}
              >
                <Icon
                  iconName="close"
                  height="16px"
                  width="16px"
                  fill={changeSvgColor(alertType)}
                />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Alert;
