import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  fill = '#000',
  height = '100%',
  width = '100%',
  className = '',
  viewBox = '0 0 16 16',
}) => (
  <svg
    className={className}
    focusable="true"
    height={height}
    version="1.1"
    viewBox={viewBox}
    width={width}
    x="0px"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    y="0px"
  >
    <g className="nc-icon-wrapper" fill={fill}>
      <path
        d="M15,16H1c-0.6,0-1-0.4-1-1V1c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1v14C16,15.6,15.6,16,15,16z M2,14h12V2H2V14 z"
        fill={fill}
      />
      <path
        d="M6,4c0.6,0,1,0.4,1,1S6.6,6,6,6S5,5.6,5,5S5.4,4,6,4z"
        data-color="color-2"
        fill={fill}
      />
      <polygon
        data-color="color-2"
        fill={fill}
        points="3,12 5,8 7,10 10,6 13,12 "
      />
    </g>
  </svg>
);

SVG.propTypes = {
  fill: PropTypes.string,
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

export default SVG;
