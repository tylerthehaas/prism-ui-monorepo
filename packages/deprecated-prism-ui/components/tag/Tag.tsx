import * as React from 'react';
import './tag.scss';

type TagProps = {
  content: string;
};

export default class Tag extends React.Component<TagProps> {
  constructor(props: TagProps) {
    super(props);
  }

  public render() {
    return (
      <span
        aria-label="tag"
        className={`psm-tag`}
        data-testid={'psm-tag'}
        tabIndex={0}
      > {this.props.content}
      </span>
    );
  }
}