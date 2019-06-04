import * as React from 'react';
import Icons from '../core/svg-icons';

import IconList from '../core/svg-icons/icon-list.js';

export type IconProps = {
  iconName: iconName;
  onClick(event: any): any;
  dataTestId?: String;
};

export enum iconName {
  'zoom-in',
  'trophy',
  'trash',
  'tail-up',
  'tail-right',
  'tail-left',
  'tail-down',
  'tag',
  'stre-up',
  'stre-right',
  'stre-left',
  'stre-down',
  'small-up',
  'small-triangle-up',
  'small-triangle-right',
  'small-triangle-left',
  'small-triangle-down',
  'small-right',
  'small-left',
  'small-down',
  'single-content',
  'single-body',
  'simple-remove',
  'simple-add',
  'share',
  'settings-gear',
  'send',
  'select',
  'search',
  'refresh',
  'radio-select',
  'radio-unselect',
  'releases',
  'road-map',
  'print',
  'pause',
  'person',
  'play',
  'menu-dots',
  'menu',
  'lock',
  'loader',
  'image',
  'invoice-spreadsheet',
  'heartbeat',
  'heart',
  'group',
  'goal',
  'globe',
  'flag-points',
  'filter',
  'eye',
  'email',
  'desktop',
  'document',
  'cloud-download',
  'check',
  'chat',
  'chat-alt',
  'chart-bar',
  'cart-simple',
  'calendar-add',
  'calendar',
  'checkbox-fill',
  'checkbox-unselected',
  'bullet-list',
  'block-down',
  'bell',
  'bookmark-unfilled',
  'bookmark-filled',
  'attach',
  'archive-check',
  'alert-circle-i',
  'add',
  'avatar-check',
  'avatar-circle',
  'avatar',
  'edit-note',
  'one-on-one',
  'play-screen',
  'power',
  'conversation',
}

export default class Icon extends React.Component<IconProps> {
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
      <span
        aria-label={`${this.props.iconName} icon`}
        className={`psm-svg-icon-${this.props.iconName}`}
        data-testid={this.props.dataTestId}
        onClick={this.handleClick}
        tabIndex={0}
      >
        <Icons
          name={this.props.iconName}
          height="16px"
          width="16px"
          fill="#707070"
          className={`svg-icon-${this.props.iconName}`}
        />
      </span>
    );
  }
}
