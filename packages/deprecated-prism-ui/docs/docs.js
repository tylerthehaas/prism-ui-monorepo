import React from 'react';

import AlertDocs from './alert-docs/AlertDocs';
import AvatarDocs from './avatar-docs/AvatarDocs';
import SideBar from './sidebar/Sidebar';
import ToggleDocs from './toggle-docs/ToggleDocs';
import TableDocs from './table-docs/TableDocs';
import TagDocs from './tag-docs/TagDocs';
import RolloverDocs from './rollover-docs/RolloverDocs';
import NavDocs from './nav-docs/NavDocs';
import ModalDocs from './modal-docs/ModalDocs';
import ListDocs from './list-docs/ListDocs';
import HRDocs from './hr-docs/HrDocs';
import ButtonDocs from './button-docs/ButtonDocs';

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
            ['Tag']: <TagDocs />,
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
