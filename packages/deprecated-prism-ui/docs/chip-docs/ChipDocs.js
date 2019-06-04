import Chip from '../../components/chip/Chip';
import React from 'react';
import Example from '../example/example';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `
<div class="psm-chip">
  Jamison Brogdon
  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" width="16" height="16">
    <g class="nc-icon-wrapper" fill="#111111">
      <path d="M14.7,1.3c-0.4-0.4-1-0.4-1.4,0L8,6.6L2.7,1.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4L6.6,8l-5.3,5.3 c-0.4,0.4-0.4,1,0,1.4C1.5,14.9,1.7,15,2,15s0.5-0.1,0.7-0.3L8,9.4l5.3,5.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L9.4,8l5.3-5.3C15.1,2.3,15.1,1.7,14.7,1.3z" fill="#d4d4d4"></path>
    </g>
  </svg>
</div>
`;

const REACT_CODE = `
import { Chip } from "prism";

<Chip
  closeAction={() => alert("Chip Closed")}
  dataTestId="1"
  label="Jamison Brogdon"
  selectAction={() => alert("Jamison Brogdon selected")}
/>
<Chip
  closeAction={() => alert("Chip Closed")}
  dataTestId="1"
  label="Caitlin Grandjean"
  selectAction={() => alert("Caitlin Grandjean selected")}
/>`;

export default class ChipDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      resetButton: false,
    };
  }

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };

  updateProps = newState => {
    this.setState({ resetButton: newState.resetButton });
  };

  render() {
    return (
      <>
        <h2 className="section-header">Chip</h2>
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
              <Chip
                closeAction={() => alert('Chip Closed')}
                dataTestId="1"
                label="Jamison Brogdon"
                selectAction={() => alert('Jamison Brogdon selected')}
              />
              <Chip
                closeAction={() => alert('Chip Closed')}
                dataTestId="1"
                label="Caitlin Grandjean"
                selectAction={() => alert('Caitlin Grandjean selected')}
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
                name: 'closeAction',
                type: 'Event',
                description:
                  'An event to be handled when the close icon gets clicked.',
              },
              {
                name: 'label',
                type: 'Boolean',
                description:
                  'A string containing the text to appear on the chip.',
              },
              {
                name: 'selectAction',
                type: 'Event',
                description:
                  'Event that gets handled when the chip is selected.',
              },
            ]}
          />
        )}
      </>
    );
  }
}
