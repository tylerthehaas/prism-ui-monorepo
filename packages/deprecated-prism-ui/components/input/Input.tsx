import * as React from 'react';
import './input.scss';
import './input-group.scss';
import AllIcons from '../core/svg-icons';

export type InputProps = {
  required?: boolean;
  placeholderText?: string;
  dataTestId?: String;

  change?(event: any): any;
  icon?: {
    name: string;
    position: string;
    onClick(event: any): any;
  };
};
export enum iconType {
  'zoom-in',
  'trophy',
  'trash',
  'tail-up',
  'tail-right',
  'tail-left',
  'tail-down',
  'tag',
  'support',
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
  'refresh',
  'print',
  'agenda',
  'menu-dots',
  'menu',
  'lock',
  'image',
  'heartbeat',
  'heart',
  'group',
  'goal',
  'flag-points',
  'favorite',
  'eye',
  'email',
  'desktop',
  'cloud-download',
  'check',
  'chat',
  'chat-alt',
  'chart-bar',
  'cart-simple',
  'calendar-add',
  'calendar',
  'bullet-list',
  'block-down',
  'bell',
  'attach',
  'archive-check',
  'alert-circle-i',
  'add',
  'avatar-check',
  'edit-note',
  'one-on-one',
  'play-screen',
  'power',
  'conversation',
}

export default class Input extends React.Component<InputProps> {
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
    placeholderText: 'Input Text Here',

    icon: null,
  };

  componentWillReceiveProps(props: InputProps) {
    this.setState({ isRequired: props.required });
    if (this.props.icon) {
      this.setState({ position: props.icon.position });
      this.setState({ name: props.icon.name });
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
              'trailing'}-icon`}
          >
            <span
              aria-label={`${this.props.icon.name} icon`}
              className={`psm-icon-svg-${this.props.icon.name}`}
              data-testid={`${this.props.dataTestId}-icon`}
              onClick={this.props.icon.onClick}
              style={{
                cursor: this.props.icon.onClick ? 'pointer' : 'default',
              }}
              tabIndex={0}
            >
              <AllIcons
                name={this.props.icon.name}
                height="16px"
                width="16px"
                fill="#707070"
              />
            </span>
            <input
              aria-labelledby="Input field"
              className={`psm-input${
                this.props.required ? ' psm-input--active' : ''
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
              this.props.required ? ' psm-input--active' : ''
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
