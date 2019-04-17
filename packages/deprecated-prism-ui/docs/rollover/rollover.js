import React from "react";
import { Rollover } from "../../components/rollover";
import { PropsWindow, PropsList } from "../props";
import { Example } from "../example";

const HTML_CODE = `<div style="width: 33%; display: inline-block;">
<span>Displayed Rollover Window</span>
<div class="psm-rollover" style="right: 160px; bottom: 175px;">
  <div class="psm-rollover__window--show">
    <ul>
      <li>John Smith</li>
      <li>Jane Doe</li>
      <li>John Smith</li>
      <li>Jane Doe</li>
      <li>John Smith</li>
    </ul>
  </div>
</div>
</div>
<div style="width: 33%; display: inline-block;">
<span>Hidden Rollover Window</span>
<div class="psm-rollover" style="right: 160px;  bottom: 200px;">
  <div class="psm-rollover__window--hide">
    <ul>
      <li>John Smith</li>
      <li>Jane Doe</li>
      <li>John Smith</li>
      <li>Jane Doe</li>
      <li>John Smith</li>
    </ul>
  </div>
</div>
</div>
<div style="width: 33%; display: inline-block;">
<span>Displayed Rollover Window With Footer</span>
<div class="psm-rollover" style="right: 200px;  bottom: 200px;">
  <div class="psm-rollover__window--show">
    <ul>
      <li>John Smith</li>
      <li>Jane Doe</li>
      <li>John Smith</li>
      <li>Jane Doe</li>
      <li>John Smith</li>
    </ul>
    <div class="psm-rollover__footer">+10 More</div>
  </div>
</div>
</div>`;

const REACT_CODE = `
import { Rollover } from "prism";

<Rollover
  content={[
    { text: "John Smith" },
    { text: "Jane Smith" },
    { text: "John Doe" },
    { text: "Jane Doe" },
    { text: "John Smith" },
    { text: "Jane Smith" },
    { text: "John Doe" },
    { text: "Jane Doe" },
  ]}
  dotted={this.state.pickDotted}
  hoverText={"Hover over me!"}
  numShown={4}
  position={this.state.pickPosition}
  underline={this.state.pickUnderline}
  dataTestId="1"
/>`;

export class RolloverDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pickDotted: true,
      pickUnderline: false,
      pickPosition: "down",
      viewType: "html",
    };
    this.updateProps = this.updateProps.bind(this);
  }

  updateProps(newState) {
    this.setState({ pickPosition: newState.pickPosition });
    this.setState({ pickDotted: newState.pickDotted });
    this.setState({ pickUnderline: newState.pickUnderline });
  }

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? "--primary" : ""}`;
  };

  render() {
    return (
      <>
        <h2 className="section-header">Rollover</h2>
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
              <Rollover
                content={[
                  { text: "John Smith" },
                  { text: "Jane Smith" },
                  { text: "John Doe" },
                  { text: "Jane Doe" },
                  { text: "John Smith" },
                  { text: "Jane Smith" },
                  { text: "John Doe" },
                  { text: "Jane Doe" },
                ]}
                dataTestId="1"
                dotted={this.state.pickDotted}
                hoverText={"Hover over me!"}
                numShown={4}
                position={this.state.pickPosition}
                underline={this.state.pickUnderline}
              />
            </div>
          </div>
          {this.state.viewType === "react" && (
            <PropsWindow
              props={[
                {
                  label: "Position",
                  type: "select",
                  options: ["up", "down"],
                  value: "down",
                  key: "pickPosition",
                },
                {
                  label: "Dotted Underline",
                  type: "bool",
                  value: true,
                  key: "pickDotted",
                },
                {
                  label: "Solid Underline",
                  type: "bool",
                  value: false,
                  key: "pickUnderline",
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
                name: "position",
                type: "String",
                description:
                  "A string containing the position of the rollover. Options are <code>up</code> or <code>down</code>",
              },
              {
                name: "content",
                type: "Object",
                description:
                  "Object containing the text to be displayed in the rollover pop-up.<br/><b>text:</b> The text that will be displayed in one row of the pop-up.",
              },
              {
                name: "numShown",
                type: "Number",
                description:
                  "Number of content rows that will display.<br/>If there are more rows than numShown allows to show, a + more will appear and when clicked, will expand the pop-up to display the rest.",
              },
              {
                name: "hoverText",
                type: "String",
                description: "A string containing the text to be hovered over.",
              },
              {
                name: "dotted",
                type: "Boolean",
                description:
                  "If true, a dotted line will appear under the hoverable text.",
              },
              {
                name: "underline",
                type: "Boolean",
                description:
                  "If true, a solid underline will appear under the hoverable text. Dotted lines take precedence over underline, both cannot be displayed at the same time.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
