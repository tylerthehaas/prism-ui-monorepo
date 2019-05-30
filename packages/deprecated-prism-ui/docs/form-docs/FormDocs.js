import React from 'react';
import { Form } from '../../components/form';
import { PropsWindow } from '../props';
import { Example } from '../example';

const HTML_CODE = `HTML Component Coming Soon`;

const REACT_CODE = `React Component Coming Soon`;

export class FormDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      inputLeading: false,
      inputDisabled: false,
      iconName: null,
      inputRequired: false,
      inputLabel: 'Input Label',
      inputInvalid: false,
      inputUseIcon: false,
      iconPosition: 'trailing',
      inputErrorText: "Oops, looks like you're an idiot",
      inputInfoText: 'Some information about the form ',
      contentType: null,
    };
  }
  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  updateProps = newState => {
    this.setState(newState);
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };

  render() {
    return (
      <>
        <h2 className="section-header">Form</h2>
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
          <div
            className="component-window psm-card--shadow-1"
            style={{ textAlign: 'left' }}
          >
            <div className="component-window-child" style={{ width: '100%' }}>
              <Form
                content={[
                  {
                    type: 'input',
                    disabled: false,
                    errorText: 'Error message',
                    infoText: 'Informational message',
                    invalid: false,
                    label: 'Primary Label',
                    placeholderText: 'Some text here',
                    required: false,
                    secondary: {
                      type: 'input',
                      disabled: false,
                      errorText: 'Error message',
                      infoText: 'Informational message',
                      invalid: false,
                      label: 'Secondary Label',
                      placeholderText: 'Some text here',
                      required: false,
                    },
                  },
                  {
                    type: 'input',
                    disabled: false,
                    errorText: 'Error message',
                    infoText: 'Informational message',
                    invalid: false,
                    label: 'Input Label',
                    placeholderText: 'Some text here',
                    required: false,
                  },
                  {
                    type: 'textarea',
                    disabled: false,
                    invalid: false,
                    label: 'Input Label',
                    placeholderText: 'Some text here',
                    required: false,
                    maxChars: 250,
                  },
                  {
                    type: 'button',
                    label: 'Submit',
                    onClick: () => alert('Form Submitted!'),
                    primary: true,
                  },
                  {
                    type: 'button',
                    label: 'Cancel',
                    onClick: () => alert('Form Cancelled!'),
                    primary: false,
                  },
                ]}
                description="At vero eos et accusamus et iusto odio dignissimos ducimus "
                header="Form Header"
              />
            </div>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                  label: 'Type',
                  type: 'select',
                  options: ['input', 'halfinput', 'textarea', 'button'].sort(),
                  value: 'input',
                  key: 'contentType',
                },
                {
                  label: 'Icon',
                  type: 'select',
                  options: [
                    null,
                    'zoom-in',
                    'trophy',
                    'trash',
                    'tail-up',
                    'tail-right',
                    'tail-left',
                    'tail-down',
                    'tag',
                    'support',
                    'stre-up',
                    'stre-right',
                    'stre-left',
                    'stre-down',
                    'small-up',
                    'small-triangle-up',
                    'small-triangle-right',
                    'small-triangle-left',
                    'small-triangle-down',
                    'small-right',
                    'small-left',
                    'small-down',
                    'single-content',
                    'single-body',
                    'simple-remove',
                    'simple-add',
                    'share',
                    'settings-gear',
                    'send',
                    'select',
                    'refresh',
                    'print',
                    'path-unite',
                    'multiple',
                    'menu-dots',
                    'menu',
                    'lock',
                    'image',
                    'heartbeat',
                    'heart',
                    'goal',
                    'flag-points',
                    'favorite',
                    'eye',
                    'email',
                    'desktop',
                    'cloud-download',
                    'check',
                    'chat',
                    'chat-alt',
                    'chart-bar',
                    'cart-simple',
                    'calendar-add',
                    'calendar',
                    'bullet-list',
                    'block-down',
                    'bell',
                    'attach',
                    'archive-check',
                    'alert-circle-i',
                    'add',
                    'a-check',
                    'edit-note',
                    'one-on-one',
                    'play-screen',
                    'power',
                    'conversation',
                  ].sort(),
                  value: 'null',
                  key: 'iconName',
                },
                {
                  label: 'Icon Position',
                  type: 'select',
                  options: ['trailing', 'leading'],
                  value: 'trailing',
                  key: 'iconPosition',
                },

                {
                  label: 'Label',
                  type: 'text',
                  value: 'Input Label',
                  key: 'inputLabel',
                },
                {
                  label: 'Info Text',
                  type: 'text',
                  value: 'Some information about the form ',
                  key: 'inputInfoText',
                },
                {
                  label: 'Error Text',
                  type: 'text',
                  value: "Oops, looks like you're an idiot",
                  key: 'inputErrorText',
                },
                {
                  label: 'Maximum Characters',
                  type: 'text',
                  value: '250',
                  key: 'inputChars',
                },
                {
                  label: 'Required',
                  type: 'bool',
                  value: false,
                  key: 'inputRequired',
                },
                {
                  label: 'Invalid',
                  type: 'bool',
                  value: false,
                  key: 'inputInvalid',
                },
                {
                  label: 'Disabled',
                  type: 'bool',
                  value: false,
                  key: 'inputDisabled',
                },
              ]}
              updateProps={this.updateProps}
            />
          )}
        </div>
        <br />
        <Example
          htmlCode={HTML_CODE}
          reactCode={REACT_CODE}
          type={this.state.viewType}
        />
      </>
    );
  }
}
