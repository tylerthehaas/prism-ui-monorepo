import { Chip } from "../../components/chip";
import React from "react";
import { Example } from "../example";
import { PropsList } from "../props";

const HTML_CODE = `<div class="psm-chip">Jamison Brogdon</div>
<div class="psm-chip--selected"> Caitlin Grandjean</div>
`;

const REACT_CODE = `
import { Chip } from "prism";

<Chip
  closeAction={() => alert("Chip Closed")}
  dataTestId="1"
  label="Jamison Brogdon"
  selectAction={() => alert("Jamison Brogdon selected")}
/>
<Chip
  closeAction={() => alert("Chip Closed")}
  dataTestId="1"
  label="Caitlin Grandjean"
  selectAction={() => alert("Caitlin Grandjean selected")}
/>`;

export class ChipDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "html",
      resetButton: false,
    };
  }

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? "--primary" : ""}`;
  };

  updateProps = newState => {
    this.setState({ resetButton: newState.resetButton });
  };

  render() {
    return (
      <>
        <h2 className="section-header">Chip</h2>
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
              <Chip
                closeAction={() => alert("Chip Closed")}
                dataTestId="1"
                label="Jamison Brogdon"
                selectAction={() => alert("Jamison Brogdon selected")}
              />
              <Chip
                closeAction={() => alert("Chip Closed")}
                dataTestId="1"
                label="Caitlin Grandjean"
                selectAction={() => alert("Caitlin Grandjean selected")}
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
                name: "closeAction",
                type: "Event",
                description:
                  "An event to be handled when the close icon gets clicked.",
              },
              {
                name: "label",
                type: "Boolean",
                description:
                  "A string containing the text to appear on the chip.",
              },
              {
                name: "selectAction",
                type: "Event",
                description:
                  "Event that gets handled when the chip is selected.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
