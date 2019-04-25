/* eslint no-console: 0 */
import Pagination from '../../components/pagination/Pagination';
import React from 'react';
import Example from '../example/Example';
import PropsWindow from '../props-window/PropsWindow';
import PropsList from '../props-list/PropsList';

const HTML_CODE = `
<ul class="psm-pagination">
  <li class="psm-icon-small-left"></li>
  <li class="psm-pagination__number">1</li>
  <li class="psm-pagination__number">2</li>
  <li class="psm-pagination__number psm-pagination__active">3</li>
  <li class="psm-pagination__number">4</li>
  <li class="psm-pagination__number">5</li>
  <li class="psm-icon-small-right"></li>
</ul>
<ul class="psm-pagination">
  <li class="psm-icon-small-left"></li>
  <li class="psm-pagination__number">1</li>
  <li class="psm-pagination__elipses"></li>
  <li class="psm-pagination__number">8</li>
  <li class="psm-pagination__number">9</li>
  <li class="psm-pagination__number psm-pagination__active">10</li>
  <li class="psm-pagination__number">11</li>
  <li class="psm-pagination__number">12</li>
  <li class="psm-pagination__elipses"></li>
  <li class="psm-pagination__number">37</li>
  <li class="psm-icon-small-right"></li>
</ul>
<ul class="psm-pagination">
  <li class="psm-icon-small-left"></li>
  <li class="psm-pagination__number">1</li>
  <li class="psm-pagination__number">2</li>
  <li class="psm-pagination__number psm-pagination__active">3</li>
  <li class="psm-pagination__number">4</li>
  <li class="psm-pagination__number">5</li>
  <li class="psm-pagination__elipses"></li>
  <li class="psm-pagination__number">37</li>
  <li class="psm-icon-small-right"></li>
</ul>
<ul class="psm-pagination">
  <li class="psm-icon-small-left psm-pagination__disabled"></li>
  <li class="psm-pagination__number psm-pagination__active">1</li>
  <li class="psm-pagination__number">2</li>
  <li class="psm-pagination__number ">3</li>
  <li class="psm-pagination__number">4</li>
  <li class="psm-icon-small-right"></li>
</ul>
<ul class="psm-pagination">
  <li class="psm-icon-small-left"></li>
  <li class="psm-pagination__number">1</li>
  <li class="psm-pagination__number">2</li>
  <li class="psm-pagination__number">3</li>
  <li class="psm-pagination__number psm-pagination__active">4</li>
  <li class="psm-pagination__number">5</li>
  <li class="psm-pagination__number">6</li>
  <li class="psm-pagination__number">7</li>
  <li class="psm-icon-small-right"></li>
</ul>
<ul class="psm-pagination">
  <li class="psm-icon-small-left"></li>
  <li class="psm-pagination__number">1</li>
  <li class="psm-pagination__elipses"></li>
  <li class="psm-pagination__number">35</li>
  <li class="psm-pagination__number">36</li>
  <li class="psm-pagination__number psm-pagination__active">37</li>
  <li class="psm-icon-small-right psm-pagination__disabled"></li>
</ul>
</div>`;

const REACT_CODE = `
import { Pagination } from "prism";

<Pagination
  dataTestId="1"
  numPages={15}
  onClick={() => console.log()}
  pagesShown={this.state.pages}
/>`;

export default class PaginationDocs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      viewType: 'html',
      pages: 7,
    };
  }

  switchType = triggered => {
    this.setState({ viewType: triggered });
  };

  buttonClass = viewTarget => {
    return `psm-button${this.state.viewType === viewTarget ? '--primary' : ''}`;
  };

  updateProps = newState => {
    this.setState({ pages: newState.pages });
  };

  render() {
    return (
      <>
        <h2 className="section-header">Pagination</h2>
        <button
          className={this.buttonClass('html')}
          onClick={() => this.switchType('html')}
        >
          HTML
        </button>
        <button
          className={this.buttonClass('react')}
          onClick={() => this.switchType('react')}
        >
          React
        </button>
        <div className="window-group">
          <div className="component-window psm-card--shadow-1">
            <div className="component-window-child">
              <Pagination
                dataTestId="1"
                numPages={15}
                onClick={() => console.log()}
                pagesShown={this.state.pages}
              />
            </div>
          </div>
          {
            <PropsWindow
              props={[
                {
                  label: 'Pages Shown',
                  type: 'text',
                  value: '7',
                  key: 'pages',
                },
              ]}
              updateProps={this.updateProps}
            />
          }
        </div>
        <br />
        <Example
          htmlCode={HTML_CODE}
          reactCode={REACT_CODE}
          type={this.state.viewType}
        />
        {this.state.viewType === 'react' && (
          <PropsList
            props={[
              {
                name: 'pagesShown',
                type: 'Number',
                description: 'Number of pages to be visible while navigating.',
              },
              {
                name: 'numPages',
                type: 'Number',
                description: 'Number of pages the pagination bar should have.',
              },
              {
                name: 'onClick',
                type: 'Event',
                description:
                  'Event that will be handled when a number is clicked.',
              },
            ]}
          />
        )}
      </>
    );
  }
}
