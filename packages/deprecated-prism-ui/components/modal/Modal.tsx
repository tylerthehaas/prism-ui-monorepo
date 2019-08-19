import React, { useState, useMemo } from 'react';
import FocusLock from 'react-focus-lock';
import Button from '../button/Button';
import './modal.scss';
import '../button/button.scss';

import Icon from '../icon/Icon';

interface ModalProps {
  actions?: Action[];
  'data-testid'?: string;
  children: React.ReactNode;
  modalTrigger: boolean;
  modalTriggerLabel: string;
  onClose: (
    event?: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>,
  ) => void;
  show: boolean;
  title: string;
}

interface Action {
  label: string;
  primary: boolean;
  onClick: (event?: React.MouseEvent<HTMLElement>) => void;
}

interface ModalState {
  isShowing: boolean;
  isClosableByClick: boolean;
}

let TITLE_ID_INC = 0;

export const Modal = ({
  actions,
  children,
  'data-testid': testid = '',
  modalTrigger = false,
  modalTriggerLabel = 'modal trigger',
  onClose = () => {},
  show = false,
  title,
}: ModalProps) => {
  const [isShowing, setIsShowing] = useState<ModalState['isShowing']>(show);
  const [isClosableByClick, setIsClosableByClick] = useState<
    ModalState['isClosableByClick']
  >(true);

  const titleId = useMemo(() => {
    TITLE_ID_INC += 1;
    return `title-${TITLE_ID_INC}`;
  }, []);

  function handleClick(event: React.MouseEvent<HTMLElement, MouseEvent>) {
    event.stopPropagation();
    setIsShowing(false);
    if (onClose) onClose(event);
  }

  function handleDialogClick(
    event:
      | React.MouseEvent<HTMLDivElement, MouseEvent>
      | React.KeyboardEvent<HTMLDivElement>,
  ) {
    if (isClosableByClick) {
      setIsShowing(false);
      onClose(event);
    }
  }

  function handleModalTrigger() {
    if (modalTrigger) {
      return (
        <Button onClick={() => setIsShowing(true)} label={modalTriggerLabel} />
      );
    }
    return '';
  }

  return (
    <>
      {handleModalTrigger()}
      <div
        onClick={handleDialogClick}
        onKeyDown={event =>
          event.key === 'Escape' ? handleDialogClick(event) : {}
        }
        role="presentation"
      >
        {isShowing ? (
          <FocusLock noFocusGuards>
            <dialog
              aria-labelledby={titleId}
              aria-expanded={isShowing}
              aria-live="assertive"
              aria-modal="true"
              className={`psm-modal--${isShowing ? 'show' : 'hide'}`}
              data-testid={testid}
            >
              <div
                className="psm-modal__content"
                onMouseEnter={() => setIsClosableByClick(false)}
                onMouseLeave={() => setIsClosableByClick(true)}
              >
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
                <div className="psm-modal__body" role="region" tabIndex={0}>
                  <div>{children}</div>
                </div>
                <div className="psm-modal__footer">
                  {actions &&
                    actions.length !== 0 &&
                    actions.map((action, index) => {
                      return (
                        <button
                          type="button"
                          className={`psm-button${
                            action.primary ? '--primary' : ''
                          }`}
                          data-testid={`${testid}-button-${index}`}
                          key={index}
                          onClick={handleClick}
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
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default Modal;
