/* eslint no-console: 0 */
import Modal from '../../components/modal/Modal';
import React from 'react';
import Example from '../example/Example';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `
<div class="psm-modal--show" style="position: relative; height: 550px">
    <h1 style="float: right; margin: 20px;">Browser Window</h1>
    <div class="psm-modal__content" style="width: 80%;">
      <i class="psm-icon-simple-remove psm-modal__close"></i>
      <h3 class="psm-modal__header">Modal Header</h3>
      <div class="psm-modal__body" style="max-height: 250px">
        <p>Paragraph text that is contained inside the modal body. Paragraph text that is contained inside the modal
          body. Paragraph text that is contained inside the modal body. Paragraph text that is contained inside the
          modal.
          body. Paragraph text that is contained inside the modal body. Paragraph text that is contained inside the
          modal. </p>
      </div>
      <div class="psm-modal__footer">
        <button class="psm-button" style="float: left;">Button</button>
        <button class="psm-button psm-button--primary" style="float: right;">Button</button>
      </div>
    </div>
  </div>`;

const REACT_CODE = `
import { Modal } from "prism";

<Modal
  actions={[
    {
      onClick: () => {
        console.log("Alert: Button Clicked");
      },
      label: "Button",
      primary: true,
    },
    {
      onClick: () => {
        console.log("Alert: Modal Canceled.");
      },
      label: "Cancel",
      primary: false,
      shouldCloseModal: true,
    },
  ]}
  dataTestId="1"
  modalButtonId="show-modal-button"
  onClose={this.closeModal}
  show={this.state.show}
  title="Modal Header"
  >
    <p>
      Paragraph text that is contained inside the modal body.
      Paragraph text that is contained inside the modal body.
      Paragraph text that is contained inside the modal body.
    </p>
</Modal>`;

export default class ModalDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false,
      viewType: 'html',
    };
  }

  showModal = () => {
    this.setState(pState => ({ show: !pState.show }));
  };

  closeModal = () => {
    this.setState(pState => ({ show: !pState.show }));
  };

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };

  render() {
    return (
      <>
        <h2 className="section-header">Modal</h2>
        <button
          className={this.buttonClass('html')}
          onClick={() => this.switchType('html')}
        >
          HTML
        </button>
        <button
          className={this.buttonClass('react')}
          onClick={() => this.switchType('react')}
        >
          React
        </button>
        <div className="window-group">
          <div className="component-window psm-card--shadow-1">
            <div className="component-window-child">
              <button
                className="psm-button--primary"
                id="show-modal-button"
                onClick={this.showModal}
              >
                {' '}
                Show Modal
              </button>
              <Modal
                actions={[
                  {
                    onClick: () => {
                      console.log('Alert: Button Clicked');
                    },
                    label: 'Button',
                    primary: true,
                  },
                  {
                    onClick: () => {
                      console.log('Alert: Modal Canceled.');
                    },
                    label: 'Cancel',
                    primary: false,
                    shouldCloseModal: true,
                  },
                ]}
                dataTestId="1"
                modalButtonId="show-modal-button"
                onClose={this.closeModal}
                show={this.state.show}
                title="Modal Header"
              >
                <p>
                  Paragraph text that is contained inside the modal body.
                  Paragraph text that is contained inside the modal body.
                  Paragraph text that is contained inside the modal body.
                </p>
              </Modal>
            </div>
          </div>
        </div>
        <br />
        <Example
          htmlCode={HTML_CODE}
          reactCode={REACT_CODE}
          type={this.state.viewType}
        />
        {this.state.viewType === 'react' && (
          <PropsList
            props={[
              {
                name: 'content',
                type: 'String',
                description:
                  'A string containing the text to display in the body of the modal.',
              },
              {
                name: 'title',
                type: 'String',
                description:
                  'A string containing the text that will be the title of the modal.',
              },
              {
                name: 'actions',
                type: 'Object',
                description:
                  'An object containting the buttons to display on the modal.<br/><b>onClick:</b> Event to be handled when button is clicked.<br/><b>label:</b> String that will be displayed on the button.<br/><b>primary:</b> Boolean deciding whether or not the button is primary.<br/><b>shouldCloseModal:</b> Boolean that defaults to false and decides whether a button should close the modal.',
              },
            ]}
          />
        )}
      </>
    );
  }
}
