/* eslint no-console: 0 */
import React from 'react';
import Input from '../../components/input/input';
import Example from '../example/example';
import PropsWindow from '../props-window/PropsWindow';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `<div class="narrow">
<input class="psm-input" type="text" placeholder="Text input">
<input class="psm-input psm-input--active" type="text" placeholder="Text input in error state" required>
<div class="psm-input-leading-icon">
  <i class="psm-icon-calendar"></i>
  <input class="psm-input" type="text" placeholder="Input with leading icon">
</div>
<div class="psm-input-trailing-icon">
  <i class="psm-icon-tail-right"></i>
  <input class="psm-input" type="text" placeholder="Input with trailing icon">
</div>
<select class="psm-input psm-select">`;

const REACT_CODE = `<Input
icon={{
  name: this.state.iconName,
  position: this.state.iconPosition,
  onClick: () => {
    console.log("icon test");
  },
}}
placeholderText="Some text here"
required={this.state.inputRequired}
/>`;

export default class InputDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      inputLeading: false,
      iconName: 'tail-right',
      inputRequired: false,
      inputUseIcon: false,
      iconPosition: 'trailing',
    };
  }
  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };

  updateProps = newState => {
    this.setState({ iconName: newState.iconName });
    this.setState({ inputRequired: newState.inputRequired });
    this.setState({ iconPosition: newState.iconPosition });
  };

  render() {
    return (
      <>
        <h2 className="section-header">Inputs</h2>
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
            <div className="component-window-child" style={{ width: '100%' }}>
              <Input
                icon={{
                  name: this.state.iconName,
                  position: this.state.iconPosition,
                  onClick: () => {
                    console.log('icon test');
                  },
                }}
                placeholderText="Some text here"
                required={this.state.inputRequired}
              />
            </div>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                  label: 'Icon',
                  type: 'select',
                  options: [
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
                  value: 'tail-right',
                  key: 'iconName',
                },
                {
                  label: 'Position',
                  type: 'select',
                  options: ['trailing', 'leading'],
                  value: 'trailing',
                  key: 'iconPosition',
                },
                {
                  label: 'Required',
                  type: 'bool',
                  value: false,
                  key: 'inputRequired',
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
                name: 'required',
                type: 'Boolean',
                description:
                  'If true, will give input box a red border until text is input.',
              },
              {
                name: 'placeholderText',
                type: 'String',
                description:
                  'Text that will appear in the box until text is input.',
              },
              {
                name: 'icon',
                type: 'Object',
                description:
                  'Contains the icon name, position, and action.<br/><b>name:</b> String containing the name of the icon to be displayed.<br/><b>position:</b> String containing the position of the icon. Options are <code>leading</code>, which puts the icon in front of the placeholder text, or <code>trailing</code>, which puts the icon at the end of the input box.<br/><b>onClick:</b> An event to be handled when the icon is clicked.<br/><b>Note:</b> If an icon is not needed, the object can be set to null. The icon object would look like this: <code>icon={null}</code>',
              },
            ]}
          />
        )}
      </>
    );
  }
}
