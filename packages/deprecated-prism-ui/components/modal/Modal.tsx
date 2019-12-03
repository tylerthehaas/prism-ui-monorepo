import React, { useState, useMemo, ReactNode, MouseEvent } from 'react';
import FocusLock from 'react-focus-lock';
import Button from '../button/Button';
import './modal.scss';
import '../button/button.scss';

import Icon from '../icon/Icon';

interface ModalProps {
  /** Buttons/options that will be placed in the opened modal's footer */
  actions?: Action[];
  'data-testid'?: string;
  children: ReactNode;
  /** Custom class name for component */
  className?: string;
  /** If true, includes a button that shows the modal */
  modalTrigger: boolean;
  /** Label of the modal trigger */
  modalTriggerLabel: string;
  /** Event that fires when the modal closes */
  onClose: (
    event?:
      | MouseEvent<HTMLDivElement | HTMLButtonElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => void;
  /** Determines if the modal is visible or not  */
  show: boolean;
  /** Title of the modal */
  title: string;
}

interface Action {
  label: string;
  primary: boolean;
  onClick: (event?: MouseEvent<HTMLDivElement | HTMLButtonElement>) => void;
}

interface ModalState {
  isShowing: boolean;
  isClosableByClick: boolean;
}

let TITLE_ID_INC = 0;

export const Modal = ({
  actions,
  children,
  className = '',
  'data-testid': testid = 'prism-modal',
  modalTrigger = false,
  modalTriggerLabel,
  onClose = () => {},
  show = false,
  title,
}: ModalProps) => {
  const [isShowing, setIsShowing] = useState<ModalState['isShowing']>(show);

  React.useEffect(() => {
    setIsShowing(show);
  }, [show]);

  React.useEffect(() => {
    const handleKeyboard = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isShowing) {
        setIsShowing(false);
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyboard);
    return () => window.removeEventListener('keydown', handleKeyboard);
  }, [onClose, isShowing]);

  const titleId = useMemo(() => {
    TITLE_ID_INC += 1;
    return `title-${TITLE_ID_INC}`;
  }, []);

  function handleClick(
    event:
      | MouseEvent<HTMLDivElement | HTMLButtonElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) {
    setIsShowing(false);
    if (onClose) onClose(event);
  }

  function handleDialogClick(event: MouseEvent<HTMLDivElement>) {
    if (event.target instanceof HTMLDialogElement) {
      handleClick(event);
    }
  }

  return (
    <>
      {modalTrigger ? (
        <Button onClick={() => setIsShowing(true)} label={modalTriggerLabel} />
      ) : null}
      <div onClick={handleDialogClick} role="presentation">
        <FocusLock noFocusGuards disabled={!isShowing}>
          <dialog
            aria-labelledby={titleId}
            aria-expanded={isShowing}
            aria-live="assertive"
            aria-modal="true"
            className={`psm-modal--${isShowing ? 'show' : 'hide'} ${className}`}
            data-testid={testid}
          >
            <div className="psm-modal__content">
              <button
                type="button"
                aria-label="Close"
                className="psm-modal__close"
                data-testid={`${testid}-close-icon`}
                onClick={handleClick}
                tabIndex={0}
              >
                <Icon
                  iconName="close"
                  height="16px"
                  width="16px"
                  fill="#707070"
                />
              </button>
              <h3 className="psm-modal__header" id={titleId}>
                {title}
              </h3>
              <div className="psm-modal__body" role="region">
                {children}
              </div>
              <div className="psm-modal__footer">
                {actions &&
                  actions.length !== 0 &&
                  actions.map((action, index) => (
                    /* eslint-disable react/no-array-index-key */
                    <button
                      type="button"
                      className={`psm-button${
                        action.primary ? '--primary' : ''
                      }`}
                      data-testid={`${testid}-button-${index}`}
                      key={index}
                      onClick={handleClick}
                    >
                      {action.label}
                    </button>
                    /* eslint-enable react/no-array-index-key */
                  ))}
              </div>
            </div>
          </dialog>
        </FocusLock>
      </div>
    </>
  );
};

export default Modal;
