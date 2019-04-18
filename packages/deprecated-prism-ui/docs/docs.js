import React from 'react';

import { AlertDocs } from './alert';
import { AvatarDocs } from './avatar';
import { SideBar } from './sidebar';
import { ToggleDocs } from './toggle';
import { TableDocs } from './table';
import { RolloverDocs } from './rollover';
import { NavDocs } from './nav';
import { ModalDocs } from './modal';
import { ListDocs } from './list';
import { HRDocs } from './hr';
import { ButtonDocs } from './button';

export default class Docs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      view: 'welcome',
    };
    this.navigate = this.navigate.bind(this);
    this.getDocs = this.getDocs.bind(this);
    this.changeViewType = this.changeViewType.bind(this);
  }
  navigate = component => () => {
    this.setState({
      view: component,
    });
  };
  changeViewType = viewType => () => {
    this.setState({
      viewType,
    });
  };
  getDocs = () => {
    return (
      <section>
        {
          {
            ['Alert']: <AlertDocs />,
            ['Avatar']: <AvatarDocs />,
            ['Button']: <ButtonDocs />,
            // ["Card"]: <CardDocs />,
            // ["Chip"]: <ChipDocs />,
            ['Horizontal Rule']: <HRDocs />,
            // ["Input"]: <InputDocs />,
            ['List']: <ListDocs />,
            ['Modal']: <ModalDocs />,
            ['Nav']: <NavDocs />,
            // ["Pagination"]: <PaginationDocs />,
            // ["Radio"]: <RadioDocs />,
            ['Rollover']: <RolloverDocs />,
            ['Table']: <TableDocs />,
            ['Toggle']: <ToggleDocs />,
          }[this.state.view]
        }
      </section>
    );
  };

  render() {
    return (
      <div>
        <SideBar
          changeViewType={this.changeViewType}
          navigate={this.navigate}
          view={this.state.view}
          viewType={this.state.viewType}
        />
        <div
          className="psm-paragraph language-xml"
          style={{
            maxHeight: '97vh',
            overflowY: 'scroll',
            paddingLeft: 300,
            paddingRight: 16,
          }}
        >
          {this.getDocs()}
        </div>
      </div>
    );
  }
}
