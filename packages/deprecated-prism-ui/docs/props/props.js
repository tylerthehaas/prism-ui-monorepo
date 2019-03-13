/* eslint jsx-a11y/no-onchange: 0 */
import React from "react";
import PropTypes from "prop-types";

export class PropsWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      props: this.props.props,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (e, index) => {
    const newProps = this.state.props.concat([]);

    newProps[index].value = e.target.value;

    this.setState({
      props: newProps,
    });

    const newState = this.state.props.reduce((prev, curr) => {
      return Object.assign(prev, { [curr.key]: curr.value });
    }, {});

    this.props.updateProps(newState);
  };

  handleCheck = (e, index) => {
    const newProps = this.state.props.concat([]);

    newProps[index].value = e.target.checked;

    this.setState({
      props: newProps,
    });

    const newState = this.state.props.reduce((prev, curr) => {
      return Object.assign(prev, { [curr.key]: curr.value });
    }, {});

    this.props.updateProps(newState);
  };

  render() {
    return (
      <div className="psm-card--shadow-1 props-window">
        {this.state.props.map((p, index) => {
          return (
            <div key={index}>
              {p.type !== "button" && <b>{p.label}:</b>}

              {p.type === "text" && (
                <input
                  className="psm-input"
                  onChange={e => {
                    this.handleChange(e, index);
                  }}
                  value={p.value}
                />
              )}

              {p.type === "bool" && (
                <input
                  checked={p.value}
                  onChange={e => {
                    this.handleCheck(e, index);
                  }}
                  style={{ float: "right" }}
                  type="checkbox"
                />
              )}

              {p.type === "select" && (
                <select
                  className="psm-input"
                  defaultValue={p.value}
                  onChange={e => {
                    this.handleChange(e, index);
                  }}
                >
                  {p.options.map(o => {
                    return <option key={o}>{o}</option>;
                  })}
                </select>
              )}

              {p.type === "object" && (
                <select
                  className="psm-input"
                  defaultValue={p.value}
                  onChange={e => {
                    this.handleChange(e, index);
                  }}
                >
                  {Object.entries(p.options).map(([key, value]) => {
                    return (
                      <option key={value} value={value}>
                        {key}
                      </option>
                    );
                  })}
                </select>
              )}
              {p.type === "button" && (
                <button
                  className="psm-button psm-button--primary"
                  onClick={this.props.updateProps}
                  style={{ margin: "0 auto", width: "100%" }}
                >
                  {p.label}
                </button>
              )}
            </div>
          );
        })}
      </div>
    );
  }
}

PropsWindow.propTypes = {
  props: PropTypes.array,
  updateProps: PropTypes.func,
};

export class PropsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h2
          style={{
            marginTop: 20,
            marginBottom: 20,
            padding: 10,
            textAlign: "center",
          }}
        >
          Props
        </h2>
        <div>
          {this.props.props.map(p => {
            return (
              <div key={p.name}>
                <p
                  style={{
                    fontSize: 18,
                    backgroundColor: "#f8f8f8",
                    padding: 8,
                  }}
                >
                  <b>Name: </b>
                  {p.name}, <b>Type: </b>
                  {p.type}
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: p.description }}
                  style={{ paddingLeft: 8 }}
                />
                <br />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

PropsList.propTypes = {
  props: PropTypes.array,
};
