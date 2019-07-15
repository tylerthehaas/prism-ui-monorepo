import React, { useState, ReactNode } from 'react';
import './modal.scss';
import FocusLock from 'react-focus-lock';

import Icon from '../icon/Icon';
import Button from '../button/Button';

export interface ModalProps {
  actions?: Action[];
  children: ReactNode;
  'data-testid'?: string;
  modalTrigger?: boolean;
  onClose: (event?: React.MouseEvent<HTMLDivElement>) => void;
  show: boolean;
  title: string;
}

interface Action {
  label: string;
  primary: boolean;
  onClick?: (event?: React.MouseEvent<HTMLDivElement>) => void;
  position?: string;
  shouldCloseModal?: boolean;
}

interface ModalState {
  showState: boolean;
}

export const Modal = ({
  actions = [
    {
      label: `I don't actually do anything right now`,
      primary: true,
      onClick: () => console.log(`You just had to test it anyway, didn't you?`),
      position: 'up',
      shouldCloseModal: true,
    },
    {
      label: `I'm for testing`,
      primary: false,
      onClick: () => {},
    },
  ],
  children = undefined,
  'data-testid': testid = '',
  modalTrigger = false,
  onClose = () => {},
  title = 'New Modal',
  show = false,
}: ModalProps) => {
  const [showState, setShowState] = useState<ModalState['showState']>(show);

  function handleModalClick(action: Action) {
    if (showState) {
      if (action.shouldCloseModal) setShowState(false);
      if (action.onClick) action.onClick();
    }
  }

  function handleEscape() {
    if (showState) setShowState(false);
  }

  function handleKeyboard(event: React.KeyboardEvent) {
    if (event.key === 'Escape') handleEscape();
  }

  return (
    <>
      {modalTrigger && <Button onClick={() => setShowState(!showState)} />}
      <FocusLock>
        {showState && (
          <div
            aria-expanded={showState}
            aria-labelledby={title}
            aria-live="assertive"
            aria-modal="true"
            className={`psm-modal--${showState ? 'show' : 'hide'}`}
            data-testid={testid}
            onKeyDown={handleKeyboard}
            role="dialog"
          >
            <div className="psm-modal__content" style={{ width: '80%' }}>
              <span
                aria-label={'Close'}
                className="psm-modal__close"
                data-testid={`${testid}-close-icon`}
                id={`button-${actions ? actions.length + 1 : 1}`}
                onClick={() => {
                  setShowState(false);
                  onClose();
                }}
                tabIndex={0}
              >
                <Icon
                  iconName="close"
                  height="16px"
                  width="16px"
                  fill="#707070"
                />
              </span>

              <h3
                className="psm-modal__header"
                id={`button-${actions ? actions.length + 2 : 2}`}
                style={{ outline: 'none' }}
              >
                {title}
              </h3>
              <div
                className="psm-modal__body"
                id={`button-${actions ? actions.length + 3 : 3}`}
                style={{
                  position: 'relative',
                  height: 250,
                  outline: 'none',
                }}
              >
                {children}
              </div>
              <div className="psm-modal__footer">
                {actions &&
                  actions.length !== 0 &&
                  actions.map((action, index) => {
                    return (
                      <button
                        className={`psm-button${
                          action.primary ? '--primary' : ''
                        }`}
                        data-testid={`${testid}-button-${index}`}
                        id={`button-${index}`}
                        key={index}
                        onClick={() => handleModalClick(action)}
                        style={{
                          float:
                            action.position && action.position === 'left'
                              ? 'left'
                              : 'right',
                          margin: 4,
                        }}
                        tabIndex={0}
                      >
                        {action.label}
                      </button>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </FocusLock>
    </>
  );
};

export default Modal;
