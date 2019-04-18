/* eslint jsx-a11y/no-onchange: 0 */
import React from 'react';
import PropTypes from 'prop-types';

export default class PropsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <h2
          style={{
            marginTop: 20,
            marginBottom: 20,
            padding: 10,
            textAlign: 'center',
          }}
        >
          Props
        </h2>
        <div>
          {this.props.props.map(p => {
            return (
              <div key={p.name}>
                <p
                  style={{
                    fontSize: 18,
                    backgroundColor: '#f8f8f8',
                    padding: 8,
                  }}
                >
                  <b>Name: </b>
                  {p.name}, <b>Type: </b>
                  {p.type}
                </p>
                <p
                  dangerouslySetInnerHTML={{ __html: p.description }}
                  style={{ paddingLeft: 8 }}
                />
                <br />
              </div>
            );
          })}
        </div>
      </>
    );
  }
}

PropsList.propTypes = {
  props: PropTypes.array,
};
