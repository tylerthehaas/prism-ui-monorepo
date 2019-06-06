import React from 'react';

import Alert, { Type } from '../../components/alert/Alert';
import Example from '../example/Example';

import PropsWindow from '../props-window/PropsWindow';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `
<div>
  <div class="psm-alert psm-alert--success">
    <span class="psm-alert__msg">Success message</span>
    <svg version="1.1" focusable="false" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" width="16" height="16">
      <g class="nc-icon-wrapper" fill="#111111">
        <path fill="#111111" d="M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z"></path>
      </g>
    </svg>
  </div>
</div>
`;

const REACT_CODE = `
import { Alert } from "prism";

<Alert
  button={{
    text: "Button",
    onClick: () => alert("Button clicked!"),
  }}
  link={
    this.state.link
      ? { text: "Link", href: "javascript:alert('Link clicked!')" }
      : null
  }
  message={this.state.message || "Success message"}
  type={this.state.style || Type.success}
  type={this.state.type || Type.basic}
/>`;

export default class AlertDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Success message',
      style: Type.success,
      viewType: 'html',
    };
  }

  updateProps = newState => {
    this.setState(newState);
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
        <h2 className="section-header">Alerts</h2>
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
            <Alert
              // eslint-disable-next-line
              onDismiss={() => console.log('alert closed')}
              type={this.state.style || Type.success}
            >
              {this.state.message}
            </Alert>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                  label: 'Message',
                  type: 'text',
                  value: 'Success message',
                  key: 'message',
                },
                {
                  label: 'Type',
                  type: 'object',
                  value: Type.success,
                  key: 'style',
                  options: Type,
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
        {this.state.viewType === 'react' && (
          <PropsList
            props={[
              {
                name: 'message',
                type: 'String',
                description:
                  "String representing the alert's content<br/>" +
                  "<strong>Default</strong>: 'Alert message'",
              },
              {
                name: 'style',
                type: 'Enum',
                description:
                  'Enum denoting the alert style. Options are success, info, warning, error.' +
                  "<br/>Example usage: <br/><code>import { Alert, Type } from 'alert';<br/> &lt;Alert style={Type.success} /&gt;</code><br/>" +
                  '<strong>Default</strong>: Type.info',
              },
            ]}
          />
        )}
      </>
    );
  }
}
