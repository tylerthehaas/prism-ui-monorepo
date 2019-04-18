import { HR } from '../../components/hr';
import React from 'react';
import { Example } from '../example';

const HTML_CODE = `<hr class="psm-hr" />`;

const REACT_CODE = `
import { HR } from "prism";

<HR />`;

export default class HRDocs extends React.Component {
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
        <h2 className="section-header">Horizontal Rule</h2>
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
              <HR />
            </div>
          </div>
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
