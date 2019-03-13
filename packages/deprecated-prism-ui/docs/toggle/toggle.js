import React from "react";
import { Toggle } from "../../components/toggle";
// import { PropsWindow } from "../props";
import { Example } from "../example";
import { PropsList } from "../props";

const HTML_CODE = `
<div class="psm-toggle psm-toggle--inactive">
  <div class="psm-toggle__switch"></div>
</div>
<div class="psm-toggle psm-toggle--active">
  <div class="psm-toggle__switch"></div>
</div>`;

const REACT_CODE = `
import { Toggle } from "toggle";

<Toggle
  default={false}
  dataTestId="1"
  handleToggle={(event, value) => {
    this.setState({
      toggleOn: value,
    });
  }}
/>`;

export class ToggleDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleOn: false,
      viewType: "html",
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
    return `psm-button${this.state.viewType === viewTarget ? "--primary" : ""}`;
  };

  render() {
    return (
      <>
        <h2 className="section-header">Toggle Switch</h2>
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
              <Toggle
                dataTestId="1"
                default={false}
                handleToggle={(event, value) => {
                  this.setState({
                    toggleOn: value,
                  });
                }}
              />
              <span
                className="psm-alert psm-alert--success"
                style={{
                  margin: "0 auto",
                  backgroundColor: this.state.toggleOn ? "#28a450" : "white",
                  transition: "all 0.6s",
                  marginTop: 8,
                }}
              >
                The switch is on!
              </span>
            </div>
          </div>
          {/* {window.location.pathname.split("/")[2] === "react" && (
            <PropsWindow
              props={[]}
              updateProps={this.updateProps}
            />
          )} */}
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
                name: "default",
                type: "Boolean",
                description:
                  "If true, the toggle switch will default to turned on.",
              },
              {
                name: "handleToggle",
                type: "Function",
                description: "Function to be called when toggle is clicked.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
