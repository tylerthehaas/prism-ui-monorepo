import { List } from "../../components/list";
import React from "react";
import { Example } from "../example";
import { PropsWindow, PropsList } from "../props";

const HTML_CODE = `
<div>
  <table class="psm-list">
    <tr class="psm-list__row psm-list__row-sm">
      <td class="psm-list__row__lead">Utilization Awards</td>
      <td>Mark</td>
      <td>50 Days</td>
      <td>
        <button class="psm-button">Button</button>
      </td>
      <td><a>Click Here</a></td>
    </tr>
    <tr class="psm-list__row psm-list__row-sm">
      <td class="psm-list__row__lead">Utilization Awards</td>
      <td>Mark</td>
      <td>50 Days</td>
      <td>
        <button class="psm-button">Button</button>
      </td>
      <td><a>Click Here</a></td>
    </tr>
    <tr class="psm-list__row psm-list__row-sm">
      <td class="psm-list__row__lead">Utilization Awards</td>
      <td>Mark</td>
      <td>50 Days</td>
      <td>
        <button class="psm-button">Button</button>
      </td>
      <td><a>Click Here</a></td>
    </tr>
  </table>
  
  <table class="psm-list">
    <tr class="psm-list__row psm-list__row-lg">
      <td class="psm-list__row__lead">Utilization Awards</td>
      <td>Mark</td>
      <td>50 Days</td>
      <td>
        <button class="psm-button">Button</button>
      </td>
      <td><a>Click Here</a></td>
    </tr>
    <tr class="psm-list__row psm-list__row-lg">
      <td class="psm-list__row__lead">Utilization Awards</td>
      <td>Mark</td>
      <td>50 Days</td>
      <td>
        <button class="psm-button">Button</button>
      </td>
      <td><a>Click Here</a></td>
    </tr>
    <tr class="psm-list__row psm-list__row-lg">
      <td class="psm-list__row__lead">Utilization Awards</td>
      <td>Mark</td>
      <td>50 Days</td>
      <td>
        <button class="psm-button">Button</button>
      </td>
      <td><a>Click Here</a></td>
    </tr>
  </table>
</div>`;

const REACT_CODE = `
import { List } from "prism";

<List
  dataTestId="1"
  rows={[
    {
      columns: [
        { text: "Utilization Awards", isButton: false },
        {
          text: "Mark",
          isButton: false,
        },
        { text: "50 Days", isButton: false },
        {
          text: "Button",
          isButton: true,
          onClick: () => alert("Button Clicked"),
        },
      ],
    },
    {
      columns: [
        { text: "Utilization Awards", isButton: false },
        {
          text: "Mark",
          isButton: false,
        },
        { text: "50 Days", isButton: false },
        {
          text: "Button",
          isButton: true,
          onClick: () => alert("Button Clicked"),
        },
      ],
    },
  ]}
  size={this.state.rowSize}
/>`;

export class ListDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "html",
      rowSize: "Large",
    };
  }

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? "--primary" : ""}`;
  };

  updateProps = newState => {
    this.setState({ rowSize: newState.rowSize });
  };

  render() {
    return (
      <>
        <h2 className="section-header">List</h2>
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
              <List
                dataTestId="1"
                rows={[
                  {
                    columns: [
                      { text: "Utilization Awards", isButton: false },
                      {
                        text: "Mark",
                        isButton: false,
                      },
                      { text: "50 Days", isButton: false },
                      {
                        text: "Button",
                        isButton: true,
                        onClick: () => alert("Button Clicked"),
                      },
                    ],
                  },
                  {
                    columns: [
                      { text: "Utilization Awards", isButton: false },
                      {
                        text: "Mark",
                        isButton: false,
                      },
                      { text: "50 Days", isButton: false },
                      {
                        text: "Button",
                        isButton: true,
                        onClick: () => alert("Button Clicked"),
                      },
                    ],
                  },
                ]}
                size={this.state.rowSize}
              />
            </div>
          </div>
          {this.state.viewType === "react" && (
            <PropsWindow
              props={[
                {
                  label: "Row Size",
                  type: "select",
                  options: ["Small", "Medium", "Large"],
                  value: "Large",
                  key: "rowSize",
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
                name: "size",
                type: "String",
                description:
                  "A string representing the size of the rows. Options are Small, Medium, and Large.",
              },
              {
                name: "rows",
                type: "Object",
                description:
                  "An object containing the columns objects. Every new columns object will results in a new row.<br/><b>text:</b> String representing the text to display in the column.<br/><b>isButton:</b> Boolean deciding whether the text is a button.<br/><b>onClick:</b> Event that will be handled on button click, if isButton is true.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
