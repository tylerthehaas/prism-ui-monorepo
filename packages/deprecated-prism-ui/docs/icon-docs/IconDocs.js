/* eslint no-console: 0 */
import Icon from '../../components/icon/Icon';
import React from 'react';
import Example from '../example/Example';
import PropsWindow from '../props-window/PropsWindow';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `<i class="psm-icon-a-check"></i>`;
const REACT_CODE = `
import { Icon } from "prism";

<Icon
  dataTestId="1"
  iconName={this.state.icon}
  onClick={() => {
    console.log("Icon Action");
  }}
/>`;

export default class IconDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      icon: 'a-check',
      viewType: 'html',
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
    this.setState({ icon: newState.icon });
  };
  render() {
    return (
      <>
        <h2 className="section-header">Icons</h2>
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
              <Icon
                dataTestId="1"
                iconName={this.state.icon}
                onClick={() => {
                  console.log('Icon Action');
                }}
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
                  value: 'a-check',
                  key: 'icon',
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
                name: 'iconName',
                type: 'String',
                description: 'A string holding the icon name to be displayed.',
              },
              {
                name: 'onClick',
                type: 'Event',
                description: 'Event to be handled when icon is clicked.',
              },
            ]}
          />
        )}
      </>
    );
  }
}
