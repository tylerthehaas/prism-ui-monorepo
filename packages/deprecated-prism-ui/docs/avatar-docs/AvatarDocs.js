import React from 'react';

import Avatar from '../../components/avatar/Avatar';
import Example from '../example/Example';
import PropsWindow from '../props-window/PropsWindow';
import PropsList from '../props-list/PropsList';

import tobias from '../images/tobias.jpg';

const REACT_CODE = `
import { Avatar, sizes } from "prism";

<Avatar
  dataTestId="1"
  initials={this.state.initials ? "TF" : null}
  size={this.state.size}
  src={this.state.image ? tobias : null}
/>`;

const HTML_CODE = `
<div class="psm-avatar--xl">
  <img class="psm-avatar__img" src="images/tobias.jpg" />
</div>
<div class="psm-avatar--xl">
  <span class="psm-avatar__text">TF</span>
</div>
<div class="psm-avatar--xl">
  <div class="pam-avatar__silhouette"></div>
</div>
`;

export default class AvatarDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 'xl',
      image: true,
      initials: true,
      viewType: 'html',
    };
    this.updateProps = this.updateProps.bind(this);
  }

  updateProps(newState) {
    this.setState(newState);
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
        <h2 className="section-header">Avatars</h2>
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
              <Avatar
                dataTestId="1"
                initials={this.state.initials ? 'TF' : null}
                size={this.state.size}
                src={this.state.image ? tobias : null}
              />
            </div>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                  label: 'Image',
                  type: 'bool',
                  value: true,
                  key: 'image',
                },
                {
                  label: 'Initials',
                  type: 'bool',
                  value: true,
                  key: 'initials',
                },
                {
                  label: 'Size',
                  type: 'select',
                  value: 'xl',
                  key: 'size',
                  options: ['xs', 'sm', 'md', 'lg', 'xl'],
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
                name: 'src',
                type: 'Image',
                description:
                  "A variable that points to an image file like <code>import tobias from '../images/tobias.jpg';</code> or path to an image file",
              },
              {
                name: 'initials',
                type: 'String',
                description: 'A two letter string',
              },
              {
                name: 'size',
                type: 'String/Enum',
                description:
                  "A two letter string representing size. Options are xs, sm, md, lg, xl.<br/>Alternatively, <code>import { Avatar, sizes } from 'avatar'; </code>provides the enum <code>sizes.large, sizes.extraLarge</code>, etc.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
