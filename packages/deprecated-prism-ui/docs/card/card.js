import React from "react";
import { Card } from "../../components/card";
import { Example } from "../example";
import { PropsWindow, PropsList } from "../props";

const HTML_CODE = `<div class="psm-card psm-card--shadow-1" style="margin: 8px">
<h3>Card shadow type 1</h3>
<p>Some paragraph text contained within the card. Some paragraph text contained within the card</p>
</div>
<div class="psm-card psm-card--shadow-2" style="margin: 8px">
<h3>Card shadow type 2</h3>
<p>Some paragraph text contained within the card. Some paragraph text contained within the card</p>
</div>
<div class="psm-card psm-card--shadow-3" style="margin: 8px">
<h3>Card Shadow type 3</h3>
<p>Some paragraph text contained within the card. Some paragraph text contained within the card</p>
</div>`;

const REACT_CODE = `<Card shadowType={this.state.type} dataTestId="1">
<div>
  Some paragraph text contained within the card. Some paragraph
  text contained within the card
</div>
</Card>`;

export class CardDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: "html",
      type: 1,
    };
    this.updateProps = this.updateProps.bind(this);
  }

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? "--primary" : ""}`;
  };

  updateProps = newState => {
    this.setState({ type: newState.type });
  };

  render() {
    return (
      <>
        <h2 className="section-header">Card</h2>
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
              <Card dataTestId="1" shadowType={this.state.type}>
                <div>
                  Some paragraph text contained within the card. Some paragraph
                  text contained within the card
                </div>
              </Card>
            </div>
          </div>
          {this.state.viewType === "react" && (
            <PropsWindow
              props={[
                {
                  label: "Shadow Type",
                  type: "select",
                  options: ["small", "medium", "large"],
                  value: "small",
                  key: "type",
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
                name: "shadowType",
                type: "String",
                description:
                  "A string representing shadow type. Options are <code>small</code>, <code>medium</code>, and <code>large</code>.",
              },
              {
                name: "content",
                type: "HTML Element",
                description:
                  "The card content is should be put into an HTML <code>div</code> element and will be displayed within the card.",
              },
            ]}
          />
        )}
      </>
    );
  }
}
