import * as React from 'react';
import './hr.scss';

export default class HR extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public render() {
    return <hr className="psm-hr" />;
  }
}
