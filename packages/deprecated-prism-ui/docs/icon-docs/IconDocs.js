/* eslint no-console: 0 */
import Icon from '../../components/icon/Icon';
import React from 'react';
import Example from '../example/example';
import PropsWindow from '../props-window/PropsWindow';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `
<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16" xml:space="preserve" width="16" height="16">
  <g class="nc-icon-wrapper" fill="#111111">
    <path fill="#111111" d="M15,7H9V1c0-0.6-0.4-1-1-1S7,0.4,7,1v6H1C0.4,7,0,7.4,0,8s0.4,1,1,1h6v6c0,0.6,0.4,1,1,1s1-0.4,1-1V9h6 c0.6,0,1-0.4,1-1S15.6,7,15,7z"></path>
  </g>
</svg>
`;
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
      icon: 'add',
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
                    'simple-remove',
                    'share',
                    'settings-gear',
                    'send',
                    'select',
                    'search',
                    'refresh',
                    'radio-select',
                    'radio-unselect',
                    'releases',
                    'road-map',
                    'print',
                    'pause',
                    'person',
                    'play',
                    'menu-dots',
                    'menu',
                    'lock',
                    'loader',
                    'image',
                    'invoice-spreadsheet',
                    'heart-empty',
                    'heart-filled',
                    'group',
                    'goal',
                    'globe',
                    'flag-points',
                    'filter',
                    'eye',
                    'email',
                    'desktop',
                    'document',
                    'cloud-download',
                    'check',
                    'chat',
                    'chat-alt',
                    'chart-bar',
                    'calendar-add',
                    'calendar',
                    'checkbox-fill',
                    'checkbox-unselected',
                    'bullet-list',
                    'block-down',
                    'bell',
                    'bookmark-unfilled',
                    'bookmark-filled',
                    'attach',
                    'archive-check',
                    'alert-circle-i',
                    'agenda',
                    'align',
                    'announcements',
                    'avatar-add',
                    'add',
                    'avatar-check',
                    'avatar-circle',
                    'avatar',
                    'edit-note',
                    'one-on-one',
                    'play-screen',
                    'power',
                    'conversation',
                    'share2',
                    'shopping-cart',
                    'star-filled',
                    'yearbook',
                    'wellness',
                    'unlock',
                  ].sort(),
                  value: 'add',
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
