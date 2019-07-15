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
        d="M15.7,8.3l-8-8C7.5,0.1,7.3,0,7,0H1C0.4,0,0,0.4,0,1v6c0,0.3,0.1,0.5,0.3,0.7l8,8C8.5,15.9,8.7,16,9,16 s0.5-0.1,0.7-0.3l6-6C16.1,9.3,16.1,8.7,15.7,8.3z M4,5C3.4,5,3,4.6,3,4s0.4-1,1-1c0.6,0,1,0.4,1,1S4.6,5,4,5z"
        fill={fill}
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
