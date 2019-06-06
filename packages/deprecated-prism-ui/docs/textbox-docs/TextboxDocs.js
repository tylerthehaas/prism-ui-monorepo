import React from 'react';
import TextBox from '../../components/textbox/textbox';
// import PropsWindow from '../props-window/PropsWindow';
import Example from '../example/Example';

const HTML_CODE = `HTML Component Coming Soon`;

const REACT_CODE = `React Component Coming Soon`;

export default class TextBoxDocs extends React.Component {
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
        <h2 className="section-header">Text Box</h2>
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
              <TextBox
                label={'Input label'}
                maxChars={250}
                placeholderText={'Some text here'}
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
      </>
    );
  }
}
