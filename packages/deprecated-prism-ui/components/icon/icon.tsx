import * as React from "react";

export type IconProps = {
  iconName: iconName;
  onClick(event: any): any;
  dataTestId?: String;
};

export enum iconName {
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

export class Icon extends React.Component<IconProps> {
  constructor(props: IconProps) {
    super(props);
    this.state = {
      iconName: this.props.iconName,
    };
  }

  componentWillReceiveProps(props: IconProps) {
    this.setState({ iconName: props.iconName });
  }

  handleClick = event => {
    this.props.onClick(event);
  };

  public render() {
    return (
      <i
        aria-label={`${this.props.iconName} icon`}
        className={`psm-icon-${this.props.iconName}`}
        data-testid={this.props.dataTestId}
        onClick={this.handleClick}
        tabIndex={0}
      />
    );
  }
}
