import React from 'react';
import Tag from '../../components/tag/Tag';
import Example from '../example/Example';
import PropsList from '../props-list/PropsList';
import PropsWindow from '../props-window/PropsWindow';

export default class TagDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      content: 'proxy',
    };
  }

  updateProps = newState => { this.setState(newState) }

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };

  render() {
    return (
      <>
        <h2 className="section-header">Tag</h2>
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
              <Tag content={this.state.content} />
            </div>
          </div>
          {this.state.viewType === 'react' && (
            <PropsWindow
              props={[
                {
                    label: 'Content',
                    type: 'text',
                    value: this.state.content,
                    key: 'content',
                  },
              ]}
              updateProps={this.updateProps}
            />
          )}
        </div>
        <br />
        <Example
          htmlCode={`<span class="psm-tag">${this.state.content}</span>`}
          reactCode={
`import { Tag } from "prism";

<Tag content="${this.state.content}"/>`}
          type={this.state.viewType}
        />
        {this.state.viewType === 'react' && (
          <PropsList
            props={[
              {
                name: 'content',
                type: 'String',
                description: 'String containing the text that will be displayed in the tag.'
              }
            ]}
          />
        )}
      </>
    );
  }
}
