/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './style.css';
import PropTypes from 'prop-types';
import AlertDocs from '../alert-docs/AlertDocs';
import AvatarDocs from '../avatar-docs/AvatarDocs';
import ButtonDocs from '../button-docs/ButtonDocs';
import CardDocs from '../card-docs/CardDocs';
import ChipDocs from '../chip-docs/ChipDocs';
import DropdownDocs from '../dropdown-docs/DropdownDocs';
import FormDocs from '../form-docs/FormDocs';
import HRDocs from '../hr-docs/HrDocs';
import IconDocs from '../icon-docs/IconDocs';
import InputDocs from '../input-docs/InputDocs';
import ListDocs from '../list-docs/ListDocs';
import ModalDocs from '../modal-docs/ModalDocs';
import NavDocs from '../nav-docs/NavDocs';
import PaginationDocs from '../pagination-docs/PaginationDocs';
import RadioDocs from '../radio-docs/RadioDocs';
import RolloverDocs from '../rollover-docs/RolloverDocs';
import SelectDocs from '../select-docs/SelectDocs';
import SliderDocs from '../slider-docs/SliderDocs';
import SpinnerDocs from '../spinner-docs/SpinnerDocs';
import TableDocs from '../table-docs/TableDocs';
import TagDocs from '../tag-docs/TagDocs';
import TextBoxDocs from '../textbox-docs/TextboxDocs';
import ToggleDocs from '../toggle-docs/ToggleDocs';

import octanner from '../images/octanner.jpg';

const components = [
  {
    name: 'Alert',
    path: '/alert',
    main: AlertDocs,
  },
  {
    name: 'Avatar',
    path: '/avatar',
    main: AvatarDocs,
  },
  {
    name: 'Button',
    path: '/button',
    main: ButtonDocs,
  },
  {
    name: 'Card',
    path: '/card',
    main: CardDocs,
  },
  {
    name: 'Chip',
    path: '/chip',
    main: ChipDocs,
  },
  {
    name: 'Dropdown',
    path: '/dropdown',
    main: DropdownDocs,
  },
  {
    name: 'Form',
    path: '/form',
    main: FormDocs,
  },
  {
    name: 'Horizontal Rule',
    path: '/hr',
    main: HRDocs,
  },
  {
    name: 'Icons',
    path: '/icon',
    main: IconDocs,
  },
  {
    name: 'Inputs',
    path: '/input',
    main: InputDocs,
  },
  {
    name: 'List',
    path: '/list',
    main: ListDocs,
  },
  {
    name: 'Modal',
    path: '/modal',
    main: ModalDocs,
  },
  {
    name: 'Navbar',
    path: '/navbar',
    main: NavDocs,
  },
  {
    name: 'Pagination',
    path: '/pagination',
    main: PaginationDocs,
  },
  {
    name: 'Radio',
    path: '/radio',
    main: RadioDocs,
  },
  {
    name: 'Rollover',
    path: '/rollover',
    main: RolloverDocs,
  },
  {
    name: 'Select',
    path: '/select',
    main: SelectDocs,
  },
  {
    name: 'Slider',
    path: '/slider',
    main: SliderDocs,
  },
  {
    name: 'Spinner',
    path: '/spinner',
    main: SpinnerDocs,
  },
  {
    name: 'Table',
    path: '/table',
    main: TableDocs,
  },
  {
    name: 'Tag',
    path: '/tag',
    main: TagDocs,
  },
  {
    name: 'Textbox',
    path: '/textbox',
    main: TextBoxDocs,
  },
  {
    name: 'Toggle',
    path: '/toggle',
    main: ToggleDocs,
  },
];

const libraries = [
  'HTML',
  'React',
  // "Vue",
  // "Angular"
];

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      component: 'welcome',
    };
  }
  render() {
    return (
      <Router>
        <div>
          <div className={styles.sidebar}>
            <div className={styles.sidebarHead}>
              <img
                alt="octanner/prism logo"
                className={styles.sidebarHeadImage}
                src={octanner}
              />
            </div>
            <div style={{ textAlign: 'right' }}>
              {components.map(c => {
                return (
                  <Route
                    key={c.name}
                    path={c.path}
                    children={({ match }) => (
                      <div className={styles.sidebarList}>
                        <Link
                          to={c.path}
                          className={match ? styles.selected : 'hoverable'}
                        >
                          {c.name}
                        </Link>
                      </div>
                    )}
                  />
                );
              })}
            </div>
          </div>
          <div
            className="psm-paragraph language-xml"
            style={{
              maxHeight: '97vh',
              overflowY: 'scroll',
              paddingLeft: 300,
              paddingRight: 16,
            }}
          >
            {components.map((c, index) => {
              return (
                <Route
                  key={index}
                  path={c.path}
                  component={c.main}
                  exact={false}
                />
              );
            })}

            <Route
              path="/"
              render={() => {
                return <h3>Please Select a Component</h3>;
              }}
              exact={true}
            />
          </div>
        </div>
      </Router>
    );
  }
}
SideBar.propTypes = {
  navigate: PropTypes.func.isRequired,
  changeViewType: PropTypes.func.isRequired,
  view: PropTypes.string,
  viewType: PropTypes.string,
};
