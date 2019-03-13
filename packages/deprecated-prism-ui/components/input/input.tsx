import * as React from "react";

export type InputProps = {
  required?: boolean;
  placeholderText?: string;
  dataTestId?: String;

  change?(event: any): any;
  icon?: {
    name: string;
    position: string;
    action(event: any): any;
  };
};
export enum iconType {
  "zoom-in",
  "trophy",
  "trash",
  "tail-up",
  "tail-right",
  "tail-left",
  "tail-down",
  "tag",
  "support",
  "stre-up",
  "stre-right",
  "stre-left",
  "stre-down",
  "small-up",
  "small-triangle-up",
  "small-triangle-right",
  "small-triangle-left",
  "small-triangle-down",
  "small-right",
  "small-left",
  "small-down",
  "single-content",
  "single-body",
  "simple-remove",
  "simple-add",
  "share",
  "settings-gear",
  "send",
  "select",
  "refresh",
  "print",
  "path-unite",
  "multiple",
  "menu-dots",
  "menu",
  "lock",
  "image",
  "heartbeat",
  "heart",
  "goal",
  "flag-points",
  "favorite",
  "eye",
  "email",
  "desktop",
  "cloud-download",
  "check",
  "chat",
  "chat-alt",
  "chart-bar",
  "cart-simple",
  "calendar-add",
  "calendar",
  "bullet-list",
  "block-down",
  "bell",
  "attach",
  "archive-check",
  "alert-circle-i",
  "add",
  "a-check",
  "edit-note",
  "one-on-one",
  "play-screen",
  "power",
  "conversation",
}

export class Input extends React.Component<InputProps> {
  constructor(props: InputProps) {
    super(props);
    if (this.props.icon) {
      this.state = {
        name: this.props.icon.name,
        position: this.props.icon.position,
      };
    }
    this.handleChange = this.handleChange.bind(this);
  }

  static defaultProps: InputProps = {
    required: true,
    placeholderText: "Input Text Here",

    icon: null,
  };

  componentWillReceiveProps(props: InputProps) {
    this.setState({ isRequired: props.required });
    if (this.props.icon) {
      this.setState({ position: props.icon.position });
      this.setState({ name: props.icon.name });
      console.log(props);
    }
  }
  handleChange = event => {
    if (this.props.change) {
      this.props.change(event);
    }
  };
  public render() {
    return (
      <>
        {(this.props.icon && (
          <div
            className={`psm-input-${this.props.icon.position ||
              "trailing"}-icon`}
          >
            <i
              aria-label={`${this.props.icon.name} icon`}
              className={`psm-icon-${this.props.icon.name}`}
              data-testid={`${this.props.dataTestId}-icon`}
              onClick={this.props.icon.action}
              style={{ cursor: this.props.icon.action ? "pointer" : "default" }}
              tabIndex={0}
            />
            <input
              aria-labelledby="Input field"
              className={`psm-input${
                this.props.required ? " psm-input--active" : ""
              }`}
              data-testid={this.props.dataTestId}
              onChange={this.handleChange}
              placeholder={this.props.placeholderText}
              required={this.props.required}
              type="text"
            />
          </div>
        )) || (
          <input
            aria-labelledby="Input field"
            className={`psm-input${
              this.props.required ? " psm-input--active" : ""
            }`}
            data-testid={this.props.dataTestId}
            onChange={this.handleChange}
            placeholder={this.props.placeholderText}
            required={this.props.required}
            type="text"
          />
        )}
      </>
    );
  }
}
