import React from 'react';
import Slider from '../../components/slider/slider';
import PropsWindow from '../props-window/PropsWindow';
// import Example from '../example/Example';

export default class SliderDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      inputDefault: '50',
      inputMin: '1',
      inputMax: '100',
      inputStep: '1',
    };
    this.updateProps = this.updateProps.bind(this);
  }
  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  updateProps = newState => {
    this.setState(newState);
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };
  render() {
    return (
      <>
        <h2 className="section-header">Slider</h2>
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
              <Slider
                defaultValue={parseFloat(this.state.inputDefault)}
                maxValue={parseFloat(this.state.inputMax)}
                minValue={parseFloat(this.state.inputMin)}
                stepValue={parseFloat(this.state.inputStep)}
              // defaultValue={60}
              // maxValue={100}
              // minValue={10}
              // stepValue={1}
              />
            </div>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                  label: 'Default Value',
                  type: 'text',
                  value: '50',
                  key: 'inputDefault',
                },
                {
                  label: 'Maximum Value',
                  type: 'text',
                  value: '100',
                  key: 'inputMax',
                },
                {
                  label: 'Minimum Value',
                  type: 'text',
                  value: '1',
                  key: 'inputMin',
                },
                {
                  label: 'Step Value',
                  type: 'text',
                  value: '1',
                  key: 'inputStep',
                },
              ]}
              updateProps={this.updateProps}
            />
          )}
        </div>
      </>
    );
  }
}
