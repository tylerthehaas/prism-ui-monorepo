import React from 'react';

import Alert, { Style, Type } from '../../components/alert/alert';
import Example from '../example/example';
import PropsWindow from '../props-window/PropsWindow';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `
<div>
  <div class="psm-alert psm-alert--success">
    <span class="psm-alert__msg">Success message</span>
    <i class="psm-alert__close psm-icon-simple-remove"></i>
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
  style={this.state.style || Style.success}
  type={this.state.type || Type.basic}
/>`;

export default class AlertDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: 'Success message',
      link: false,
      style: Style.success,
      type: Type.basic,
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
              button={{
                text: 'Button',
                onClick: () => alert('Button clicked!'),
              }}
              link={
                this.state.link
                  ? { text: 'Link', href: "javascript:alert('Link clicked!')" }
                  : null
              }
              message={this.state.message || 'Success message'}
              style={this.state.style || Style.success}
              type={this.state.type || Type.basic}
            />
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
                  label: 'Style',
                  type: 'object',
                  value: Style.success,
                  key: 'style',
                  options: Style,
                },
                {
                  label: 'Type',
                  type: 'object',
                  value: Type.basic,
                  key: 'type',
                  options: Type,
                },
                {
                  label: 'Link',
                  type: 'bool',
                  value: false,
                  key: 'link',
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
                name: 'button',
                type: 'Object',
                description:
                  "Object describing alert button's content.<br/>" +
                  "Example usage: <br/><code>import { Alert, Type } from 'alert';<br/> &lt;Alert type={Type.button} button={{text: 'Button', onClick: () => alert('click!')}} /&gt;</code><br/>" +
                  '<strong>Note</strong>: the button property will be ignored if the Type is not of type button',
              },
              {
                name: 'link',
                type: 'Object',
                description:
                  'Object adding link content to an alert.<br/>' +
                  "Example usage: <br/><code>import { Alert, Type } from 'alert';</br> &lt;Alert type={Type.basic} link={{text: 'Link', href: 'http://some-url'}} /&gt;</code><br/>" +
                  '<strong>Note</strong>: the link property will be ignored if the Type is not of type basic',
              },
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
                  "<br/>Example usage: <br/><code>import { Alert, Style } from 'alert';<br/> &lt;Alert style={Style.success} /&gt;</code><br/>" +
                  '<strong>Default</strong>: Style.info',
              },
              {
                name: 'type',
                type: 'Enum',
                description:
                  'Enum controlling the type of alert displayed. Options are basic, inline, and button.<br/>' +
                  "Example usage: <br/><code>import { Alert, Type } from 'alert';<br/> &lt;Alert type={Type.basic} /&gt;</code><br/>" +
                  '<strong>Default</strong>: Type.info <br/>' +
                  '<strong>Note</strong>: only alerts of type basic are dismissable',
              },
            ]}
          />
        )}
      </>
    );
  }
}
