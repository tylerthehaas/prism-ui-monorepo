import React from "react";
import { render } from "react-testing-library";

import { Table } from "./";

describe("<Table />", () => {
  it("Box defaults to false", () => {
    const { container } = render(
      <Table
        actions={[
          {
            label: "Create New Initiative",
            primary: true,
            action() {
              alert("Initiative Created");
            },
          },
        ]}
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
      />,
    );
    expect(container.firstChild).toHaveClass("psm-table-header");
  });
  it("Box works", () => {
    const { container } = render(
      <Table
        actions={[
          {
            label: "Create New Initiative",
            primary: true,
            action() {
              alert("Initiative Created");
            },
          },
        ]}
        box={true}
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
      />,
    );
    expect(container.firstChild).toHaveClass("psm-table--box");
  });
});
