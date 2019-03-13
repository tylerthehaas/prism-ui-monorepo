import React from "react";
import { Table } from "../../components/table";
import { PropsWindow, PropsList } from "../props";
import { Example } from "../example";

const HTML_CODE = `
<div class="psm-table-header">Current Initiatives</div>
<div class="psm-table__actions">
  <a class="psm-button--primary">Create New Initiative</a>
</div>
<table class="psm-table">
  <thead>
	<tr class="psm-table__tr">
	  <th class="psm-table__th">Name</th>
	  <th class="psm-table__th">Assigned To</th>
	  <th class="psm-table__th">Time Remaining</th>
	  <th class="psm-table__th">Status</th>
	</tr>
  </thead>
  <tbody>
	<tr class="psm-table__tr">
	  <td class="psm-table__td">Utilization Awards</td>
	  <td class="psm-table__td">Mark</td>
	  <td class="psm-table__td">50 Days</td>
	  <td class="psm-table__td">In Progress</td>
	</tr>
  </tbody>
</table>
`;

const REACT_CODE = `
import { Table } from "table";

<Table
  actions={[
          {
            label: "Create New Initiative",
            primary: true,
            action() {
              alert("Initiative Created");
            },
          },
        ]
  }
  box={false}
  columns={[
    { label: "Name", key: "name" },
    { label: "Assigned To", key: "assignedTo" },
    { label: "Time Remaining", key: "timeRemaining" },
    { label: "Status", key: "status" },
  ]}
  data={[
    {
      name: "Utilization Awards",
      assignedTo: "Mark",
      timeRemaining: "50 Days",
      status: "In Progress",
    },
    {
      name: "Improvement Cards",
      assignedTo: "Stephanie",
      timeRemaining: "12 Days",
      status: "In Progress",
    },
    {
      name: "Safety Hero",
      assignedTo: "Steve",
      timeRemaining: "0 Days",
      status: "Complete",
    },
  ]}
  title={"Current Initiatives"}
/>
`;

export class TableDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      box: false,
      title: "Current Initiatives",
      actions: true,
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
        <h2 className="section-header">Tables</h2>
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
          <div className="component-window">
            <div className="component-window-child">
              <Table
                actions={
                  this.state.actions
                    ? [
                        {
                          label: "Create New Initiative",
                          primary: true,
                          action() {
                            alert("Initiative Created");
                          },
                        },
                      ]
                    : null
                }
                box={this.state.box}
                columns={[
                  { label: "Name", key: "name" },
                  { label: "Assigned To", key: "assignedTo" },
                  { label: "Time Remaining", key: "timeRemaining" },
                  { label: "Status", key: "status" },
                ]}
                data={[
                  {
                    name: "Utilization Awards",
                    assignedTo: "Mark",
                    timeRemaining: "50 Days",
                    status: "In Progress",
                  },
                  {
                    name: "Improvement Cards",
                    assignedTo: "Stephanie",
                    timeRemaining: "12 Days",
                    status: "In Progress",
                  },
                  {
                    name: "Safety Hero",
                    assignedTo: "Steve",
                    timeRemaining: "0 Days",
                    status: "Complete",
                  },
                ]}
                title={this.state.title}
              />
            </div>
          </div>
          {this.state.viewType === "react" && (
            <PropsWindow
              props={[
                {
                  label: "Box",
                  type: "bool",
                  value: false,
                  key: "box",
                },
                {
                  label: "Title",
                  type: "text",
                  value: "Current Initiatives",
                  key: "title",
                },
                {
                  label: "Action",
                  type: "bool",
                  value: true,
                  key: "actions",
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
                name: "actions",
                type: "Object",
                description:
                  "Object containing button information.<br/><b>label:</b> String that will appear as button label.<br/><b>primary:</b> Boolean deciding whether button is primary.<br/><b>action:</b> Event that will be handled when button is clicked.",
              },
              {
                name: "box",
                type: "Boolean",
                description:
                  "If true, table will be surrounded by an outline box.",
              },
              {
                name: "columns",
                type: "Object",
                description:
                  "Object containing column headers.<br/><b>label:</b> String containing text to display as column header.<br/><b>key:</b> String containing the key for the column. Key will be used to organize the data given as props later.",
              },
              {
                name: "data",
                type: "Object",
                description:
                  "Object containing table data. All data should be a string and should use the key given with column header. Every data object provided will display as a new row.<br/>Data should be formatted as:<br/><b>name:</b> String containing text to display as column header.",
              },
              {
                name: "title",
                type: "String",
                description:
                  "String containing the text that will be displayed as the table title.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
