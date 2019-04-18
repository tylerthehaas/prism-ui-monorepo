/* eslint no-console: 0 */
import React from 'react';
import { Dropdown } from '../../components/dropdown';
import { Example } from '../example';
import { PropsWindow, PropsList } from '../props';

const HTML_CODE = `<button class="psm-dropdown">Dropdown</button>
<button class="psm-dropdown--primary">Dropdown</button>
<br />
<div></div>
<div class="psm-dropdown__menu">
  <ul class="psm-dropdown__ul">
    <li class="psm-dropdown__li">View Award PDF</li>
    <li class="psm-dropdown__li">Preview Ecard</li>
    <li class="psm-dropdown__li">Post to Facebook</li>
  </ul>
  <ul class="psm-dropdown__ul">
    <li class="psm-dropdown__li">Cancel Nomination</li>
  </ul>
</div>`;

const REACT_CODE = `
import { Dropdown } from "prism";

<Dropdown
  disabled={this.state.pickDisable}
  dropdownMenu={[
    {
      label: "Menu Item",
      onClick: () => {
        console.log("Menu Item Clicked");
      },
    },
    {
      label: "Menu Item",
      onClick: () => {
        console.log("Menu Item Clicked");
      },
    },
    {
      label: "Menu Item",
      onClick: () => {
        console.log("Menu Item Clicked");
      },
    },
  ]}
  primary={this.state.pickPrimary}
/>`;

export default class DropdownDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      pickDisable: false,
      pickLink: false,
      pickPrimary: true,
    };
  }
  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };
  updateProps = newState => {
    this.setState({ pickDisable: newState.pickDisable });
    this.setState({ pickLink: newState.pickLink });
    this.setState({ pickPrimary: newState.pickPrimary });
  };

  render() {
    return (
      <>
        <h2 className="section-header">Dropdown</h2>
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
              <Dropdown
                disabled={this.state.pickDisable}
                dropdownMenu={[
                  {
                    label: 'Menu Item',
                    onClick: () => {
                      console.log('Menu Item Clicked');
                    },
                  },
                  {
                    label: 'Menu Item',
                    onClick: () => {
                      console.log('Menu Item Clicked');
                    },
                  },
                  {
                    label: 'Menu Item',
                    onClick: () => {
                      console.log('Menu Item Clicked');
                    },
                  },
                ]}
                primary={this.state.pickPrimary}
              />
            </div>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                  label: 'Primary Button',
                  type: 'bool',
                  value: true,
                  key: 'pickPrimary',
                },
                {
                  label: 'Disable Button',
                  type: 'bool',
                  value: false,
                  key: 'pickDisable',
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
                name: 'disabled',
                type: 'Boolean',
                description: 'If true, the button will be disabled.',
              },
              {
                name: 'primary',
                type: 'Boolean',
                description:
                  'If true, the button will be the primary blue. If false, the button will be gray.',
              },
              {
                name: 'dropdownMenu',
                type: 'Object',
                description:
                  'An object containing the dropdown menu options.<br/><b>label:</b> String containing the menu option label.<br/><b>onClick:</b> Event to be handled when the menu option is clicked.',
              },
            ]}
          />
        )}
      </>
    );
  }
}
