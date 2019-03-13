/* eslint no-console: 0 */
import React from "react";
import { Button } from "../../components/button";
import { Example } from "../example";
import { PropsWindow, PropsList } from "../props";

const HTML_CODE = `<div class="buttons">
<button class="psm-button">Button</button>
<button class="psm-button" disabled>Button</button>
<button class="psm-button psm-button--primary">Button</button>
<button class="psm-button psm-button--primary" disabled>Button</button>
<a class="psm-button">Link Button</a>
<button class="psm-button psm-button--small">Button</button>
<button class="psm-button psm-button--primary psm-button--small">Button</button>
<br />
<br />
<div class="psm-form-heading">Dropdowns</div>
<br />
<button class="psm-dropdown">Dropdown</button>
<button class="psm-dropdown--primary">Dropdown</button>
<br />
<div></div>
<div class="psm-dropdown__menu">
  <ul class="psm-dropdown__ul">
    <li class="psm-dropdown__li">View Award PDF</li>
    <li class="psm-dropdown__li">Preview Ecard</li>
    <li class="psm-dropdown__li">Post to Facebook</li>
  </ul>
  <ul class="psm-dropdown__ul">
    <li class="psm-dropdown__li">Cancel Nomination</li>
  </ul>
</div>
</div>`;

const REACT_CODE = `<Button
disabled={this.state.pickDisable}
label="Button"
dataTestId="1"
linkRef={this.state.pickLink ? "/#" : null}
primary={this.state.pickPrimary}
small={this.state.pickSize}
action={() => console.log("button clicked")}
/>`;

export class ButtonDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMenu: false,
      pickDisable: false,
      pickLink: false,
      pickPrimary: true,
      pickSize: false,
      viewType: "html",
    };
  }

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? "--primary" : ""}`;
  };

  updateProps = newState => {
    this.setState({ pickDisable: newState.pickDisable });
    this.setState({ pickLink: newState.pickLink });
    this.setState({ pickPrimary: newState.pickPrimary });
    this.setState({ pickSize: newState.pickSize });
  };

  render() {
    return (
      <>
        <h2 className="section-header">Button</h2>
        <button
          className={this.buttonClass("html")}
          onClick={() => this.switchType("html")}
        >
          HTML
        </button>
        <button
          className={this.buttonClass("react")}
          onClick={() => this.switchType("react")}
        >
          React
        </button>
        <div className="window-group">
          <div className="component-window psm-card--shadow-1">
            <div className="component-window-child">
              <Button
                action={() => console.log("button clicked")}
                dataTestId="1"
                disabled={this.state.pickDisable}
                label="Button"
                linkRef={this.state.pickLink ? "/#" : null}
                primary={this.state.pickPrimary}
                small={this.state.pickSize}
              />
            </div>
          </div>
          {this.state.viewType === "react" && (
            <PropsWindow
              props={[
                {
                  label: "Linked Button",
                  type: "bool",
                  value: false,
                  key: "pickLink",
                },
                {
                  label: "Primary Button",
                  type: "bool",
                  value: true,
                  key: "pickPrimary",
                },
                {
                  label: "Small Button",
                  type: "bool",
                  value: false,
                  key: "pickSize",
                },
                {
                  label: "Disable Button",
                  type: "bool",
                  value: false,
                  key: "pickDisable",
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
        {this.state.viewType === "react" && (
          <PropsList
            props={[
              {
                name: "primary",
                type: "Boolean",
                description:
                  "A boolean that removes the <code>--primary</code> style from the button. Default is <code>true</code>.",
              },
              {
                name: "small",
                type: "Boolean",
                description:
                  "A boolean that changes the button size from large to small. Default is <code>false</code>.",
              },
              {
                name: "disabled",
                type: "Boolean",
                description:
                  "A boolean that disables the button. Default is <code>false</code>.",
              },
              {
                name: "linkRef",
                type: "String",
                description:
                  "A URL in string format that the button will navigate to when clicked. If the button should not be a link, then this prop can either be set to <code>null</code> or be left out entirely.",
              },
              {
                name: "label",
                type: "String",
                description:
                  "Text that appears on the button. Default is <code>Button</code>",
              },
              {
                name: "action",
                type: "Event",
                description: "Event to be handled when button is clicked.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
