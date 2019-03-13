/* eslint no-console: 0 */
import { Nav } from "../../components/nav";
import React from "react";
import { Example } from "../example";
import { PropsList } from "../props";

const HTML_CODE = `
<ul className="psm-nav">
    <li className="psm-nav__tab psm-nav__active"><span>Received</span></li>
    <li className="psm-nav__tab"><span>Given</span></li>
    <li className="psm-nav__tab"><span>Personal</span></li>
</ul>`;

const REACT_CODE = `<Nav
  active={0}
  dataTestId="1"
  tabs={[
    { tab: "Received", action: () => console.log("Received") },
    { tab: "Given", action: () => console.log("Given") },
    { tab: "Personal", action: () => console.log("Personal") },
  ]}
  navigate={(event, index, value) => {
    console.log(\`index: \${index} value: \${value}\`);
  }}
/>`;

export class NavDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "html",
    };
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
        <h2 className="section-header">NavBar</h2>
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
              <Nav
                active={0}
                dataTestId="1"
                navigate={(event, index, value) => {
                  console.log(`index: ${index}\nvalue: ${value}`);
                }}
                tabs={[
                  { tab: "Received", action: () => console.log("Received") },
                  { tab: "Given", action: () => console.log("Given") },
                  { tab: "Personal", action: () => console.log("Personal") },
                ]}
              />
            </div>
          </div>
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
                name: "tabs",
                type: "Object",
                description:
                  "Object containing tab information.<br/><b>tab:</b> String containing tab label.<br/><b>action:</b> Event to be handled when tab is clicked. If each tab should not have its own action, this prop is not needed.",
              },
              {
                name: "active",
                type: "Number",
                description: "A number representing the default active tab.",
              },
              {
                name: "navigate",
                type: "Function",
                description:
                  "A function that handles the navigation event. This prop can be left out if there is no action needed every time a tab is selected.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
