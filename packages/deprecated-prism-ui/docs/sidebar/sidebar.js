/* eslint-disable */

import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styles from './style.css';
import PropTypes from 'prop-types';
import { AlertDocs } from '../alert';
import { AvatarDocs } from '../avatar';
import { ButtonDocs } from '../button';
import { CardDocs } from '../card';
import { ChipDocs } from '../chip';
import { DropdownDocs } from '../dropdown';
import { HRDocs } from '../hr';
import { IconDocs } from '../icon';
import { InputDocs } from '../input';
import { ListDocs } from '../list';
import { ModalDocs } from '../modal';
import { NavDocs } from '../nav';
import { PaginationDocs } from '../pagination';
import { RadioDocs } from '../radio';
import { RolloverDocs } from '../rollover';
import { SelectDocs } from '../select';
import { SpinnerDocs } from '../spinner';
import { TableDocs } from '../table';
import { ToggleDocs } from '../toggle';

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
