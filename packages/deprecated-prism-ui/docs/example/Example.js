import React, { Component } from 'react';
import ReactDOMServer from 'react-dom/server'
import { html_beautify } from 'js-beautify'
import PropTypes from 'prop-types';
import Prism from 'prismjs';
import 'prismjs/components/prism-jsx';

export default class Example extends Component {
  static propTypes = {
    htmlCode: PropTypes.object.isRequired,
    reactCode: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
  };

  state = {};

  highlight = code => Prism.highlight(code.trim(), Prism.languages.jsx, 'jsx');

  setCodeType = codeType => () => this.setState(() => ({ codeType }));

  render() {
    const { htmlCode, reactCode } = this.props;
    return (
      <div>
        <pre className="language-jsx">
          <code
            dangerouslySetInnerHTML={{
              __html: this.highlight(
                this.props.type === 'react' ? reactCode : htmlCode, {
                  'indent-size': 2,

                })
            }}
          />
        </pre>
      </div>
    );
  }
}
