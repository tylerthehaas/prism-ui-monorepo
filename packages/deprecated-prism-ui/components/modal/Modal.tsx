import React, {
 useState, useMemo, ReactNode, MouseEvent, KeyboardEvent,
} from 'react';
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
  /** If true, includes a button that shows the modal */
  modalTrigger: boolean;
  /** Label of the modal trigger */
  modalTriggerLabel: string;
  /** Event that fires when the modal closes */
  onClose: (
    event?: MouseEvent<HTMLDivElement | HTMLButtonElement> | KeyboardEvent<HTMLDivElement>,
  ) => void;
  /** Determines if the modal is visible or not  */
  show: boolean;
  /** Title of the modal */
  title: string;
}

interface Action {
  label: string;
  primary: boolean;
  onClick: (event?: MouseEvent<HTMLDivElement
    | HTMLButtonElement>) => void;
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

  function handleClick(event: MouseEvent<HTMLDivElement | HTMLButtonElement>) {
    setIsShowing(false);
    if (onClose) onClose(event);
  }

  function handleDialogClick(
    event: MouseEvent<HTMLDivElement>
  ) {
    event.stopPropagation();
    if (isClosableByClick) {
      handleClick(event);
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
                  {children}
                </div>
                <div className="psm-modal__footer">
                  {actions
                    && actions.length !== 0
                    && actions.map((action, index) => (
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
                      ))}
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
