/* eslint no-console: 0 */
import React from 'react';
import { Select } from '../../components/select';
import { Example } from '../example';
import { PropsWindow, PropsList } from '../props';

const HTML_CODE = `<div>
<div class="psm-multi-select">Austin Hill</div>
<div class="psm-multi-select">Kelly Mendez</div>
<div class="psm-multi-select">Jaqueline Jacobs</div>
<div class="psm-multi-select">Janice Kennedy</div>
<div class="psm-multi-select--selected">Brandon Ramos</div>
</div>
<br />
<div>
<div class="psm-multi-select psm-multi-select--radio">Austin Hill</div>
<div class="psm-multi-select psm-multi-select--radio">Kelly Mendez</div>
<div class="psm-multi-select--selected psm-multi-select--radio">Jaqueline Jacobs</div>
<div class="psm-multi-select psm-multi-select--radio">Janice Kennedy</div>
<div class="psm-multi-select--radio psm-multi-select">Brandon Ramos</div>
</div>`;

const REACT_CODE = `
import { Select } from "prism";

<Select
  dropdown={this.state.pickDrop}
  radio={this.state.pickRadio}
  content={[
    { text: "Option 1" },
    { text: "Option 2" },
    { text: "Option 3" },
    { text: "Option 4" },
  ]}
  onClick={() => {
    console.log("Selected");
  }}
/>`;

export default class SelectDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      pickDrop: true,
      pickRadio: true,
    };
    this.updateProps = this.updateProps.bind(this);
  }
  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };
  updateProps = newState => {
    this.setState({ pickRadio: newState.pickRadio });
    this.setState({ pickDrop: newState.pickDrop });
  };
  render() {
    return (
      <>
        <h2 className="section-header">Select</h2>
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
              <Select
                content={[
                  { text: 'Option 1' },
                  { text: 'Option 2' },
                  { text: 'Option 3' },
                  { text: 'Option 4' },
                ]}
                dropdown={this.state.pickDrop}
                onClick={() => {
                  console.log('Selected');
                }}
                radio={this.state.pickRadio}
              />
            </div>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                  label: 'Dropdown',
                  type: 'bool',
                  value: true,
                  key: 'pickDrop',
                },
                {
                  label: 'Radio Buttons',
                  type: 'bool',
                  value: true,
                  key: 'pickRadio',
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
                name: 'dropdown',
                type: 'Boolean',
                description:
                  'If true, it will display a dropdown menu instead of buttons.',
              },
              {
                name: 'radio',
                type: 'Boolean',
                description:
                  'If true, it will display radio button, meaning only one can be selected at a time. Dropdown takes precedence over radio buttons.',
              },
              {
                name: 'content',
                type: 'Object',
                description:
                  'Object containing the string to be displayed. If dropdown is true, then the text will be displayed menu items, otherwise it will be the button labels.<br/><b>text:</b> String that will be displayed as the button or menu item.',
              },
              {
                name: 'onClick',
                type: 'Event',
                description:
                  'Event to be handled when buttons or menu items are selected.',
              },
            ]}
          />
        )}
      </>
    );
  }
}
