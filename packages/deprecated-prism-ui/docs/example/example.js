import React, { Component } from "react";
import PropTypes from "prop-types";
import Prism from "prismjs";
import classNames from "classnames";

export class Example extends Component {
  static propTypes = {
    htmlCode: PropTypes.string.isRequired,
    reactCode: PropTypes.string.isRequired,
  };

  state = {
    // 'react' | 'html'
    codeType: "react",
  };

  highlight = code => Prism.highlight(code.trim(), Prism.languages.xml, "xml");

  setCodeType = codeType => () => this.setState(() => ({ codeType }));

  render() {
    const { htmlCode, reactCode } = this.props;
    const { codeType } = this.state;

    return (
      <div>
        <button
          className={classNames({
            "psm-button": true,
            "psm-button--primary": codeType === "react",
          })}
          onClick={this.setCodeType("react")}
        >
          React
        </button>
        <button
          className={classNames({
            "psm-button": true,
            "psm-button--primary": codeType === "html",
          })}
          onClick={this.setCodeType("html")}
        >
          HTML
        </button>
        <pre className="language-xml">
          <code
            dangerouslySetInnerHTML={{
              __html: this.highlight(
                codeType === "react" ? reactCode : htmlCode,
              ),
            }}
          />
        </pre>
      </div>
    );
  }
}
