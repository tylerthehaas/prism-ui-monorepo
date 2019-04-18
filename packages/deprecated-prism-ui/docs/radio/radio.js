/* eslint no-console: 0 */
import { Radio } from '../../components/radio';
import { Example } from '../example';
import React from 'react';
import { PropsList } from '../props';

const HTML_CODE = `<div>
<input class="psm-radio" type="radio" id="radio1" name="radio" checked>
<label for="radio1">Pick the first option</label>
</div>
<div>
<input class="psm-radio" type="radio" id="radio2" name="radio">
<label for="radio2">Pick the second option</label>
</div>
<div>
<input class="psm-radio" type="radio" id="radio3" name="radio">
<label for="radio3">Pick the third option</label>
</div>
`;

const REACT_CODE = `
import { Radio } from "prism";

<Radio
  buttons={[
    {
      text: "Option 1",
      checked: true,
    },
    {
      text: "Option 2",
      checked: false,
    },
  ]}
  onSelect={() => {
    console.log("Option Selected");
  }}
  dataTestId="1"
/>`;

export default class RadioDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
    };
  }
  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };
  render() {
    return (
      <>
        <h2 className="section-header">Radio</h2>
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
              <Radio
                buttons={[
                  {
                    text: 'Option 1',
                    checked: true,
                  },
                  {
                    text: 'Option 2',
                    checked: false,
                  },
                ]}
                dataTestId="1"
                name="radio"
                onSelect={() => {
                  console.log('Option Selected');
                }}
              />
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
                name: 'buttons',
                type: 'Object',
                description:
                  'Object containing the button information.<br/><b>text:</b> String to be displayed as button title.<br/><b>checked:</b> Boolean deciding whether the button should default to checked.',
              },
              {
                name: 'onSelect',
                type: 'Event',
                description:
                  'Event that will be handled when an option is selected.',
              },
            ]}
          />
        )}
      </>
    );
  }
}
