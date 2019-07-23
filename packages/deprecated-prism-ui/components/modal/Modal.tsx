import React, { useEffect, useMemo } from 'react';
import FocusLock from 'react-focus-lock';
import './modal.scss';

import Icon from '../icon/Icon';

interface ModalProps {
  actions?: Action[];
  'data-testid'?: string;
  children: React.ReactNode;
  onClose: (event?: React.MouseEvent<HTMLElement>) => void;
  show: boolean;
  title: string;
}

interface Action {
  label: string;
  primary: boolean;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

let TITLE_ID_INC = 0;

export const Modal = ({
  actions,
  children,
  'data-testid': testid = '',
  onClose,
  title,
  show,
}: ModalProps) => {
  function handleEscape() {
    if (show) {
      onClose();
    }
  }

  const handleKeyboard = (event: KeyboardEvent | React.KeyboardEvent) => {
    if (event.key === 'Escape') handleEscape();
  };

  const handleClick = (e: MouseEvent) => {
    if (e.target instanceof HTMLDialogElement) {
      onClose();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, []);

  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const titleId = useMemo(() => {
    TITLE_ID_INC += 1;
    return `title-${TITLE_ID_INC}`;
  }, []);

  function handleModalClick(action: Action) {
    if (show) {
      action.onClick();
    }
  }

  return (
    <FocusLock>
      <dialog
        aria-labelledby={titleId}
        aria-expanded={show}
        aria-live="assertive"
        aria-modal="true"
        className={`psm-modal--${show ? 'show' : 'hide'}`}
        data-testid={testid}
      >
        <div className="psm-modal__content" style={{ width: '80%' }}>
          <button
            type="button"
            aria-label="Close"
            className="psm-modal__close"
            data-testid={`${testid}-close-icon`}
            onClick={onClose}
          >
            <Icon iconName="close" height="16px" width="16px" fill="#707070" />
          </button>

          <h3
            className="psm-modal__header"
            id={titleId}
            style={{ outline: 'none' }}
          >
            {title}
          </h3>
          <div
            className="psm-modal__body"
            style={{
              position: 'relative',
              height: 250,
            }}
            role="region"
            tabIndex={0}
          >
            <div>{children}</div>
          </div>
          <div className="psm-modal__footer">
            {actions &&
              actions.length !== 0 &&
              actions.map((action, index) => {
                return (
                  <button
                    type="button"
                    className={`psm-button${action.primary ? '--primary' : ''}`}
                    data-testid={`${testid}-button-${index}`}
                    key={index}
                    onClick={e => {
                      e.stopPropagation();
                      handleModalClick(action);
                      onClose(e);
                    }}
                    style={{
                      margin: 4,
                    }}
                  >
                    {action.label}
                  </button>
                );
              })}
          </div>
        </div>
      </dialog>
    </FocusLock>
  );
};

export default Modal;
