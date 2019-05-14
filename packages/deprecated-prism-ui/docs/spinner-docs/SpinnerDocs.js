import React from 'react';
import Spinner from '../../components/spinner/spinner';
import Example from '../example/example';
import PropsWindow from '../props-window/PropsWindow';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `<div className="psm-spinner--md">
<div />
<div />
<div />
<div />
</div>`;

const REACT_CODE = `
import { Spinner } from "prism";

<Spinner size={this.state.pickSize} />`;

export default class SpinnerDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      pickSize: 'md',
    };
    this.updateProps = this.updateProps.bind(this);
  }
  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  updateProps = newState => {
    this.setState({ pickSize: newState.pickSize });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };
  render() {
    return (
      <>
        <h2 className="section-header">Loading Spinner</h2>
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
              <Spinner size={this.state.pickSize} />
            </div>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                  label: 'Size',
                  type: 'select',
                  options: ['md', 'sm', 'xs'],
                  value: 'md',
                  key: 'pickSize',
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
                name: 'size',
                type: 'String',
                description:
                  'A two letter string representing size. Options are xs, sm, md.',
              },
            ]}
          />
        )}
      </>
    );
  }
}
