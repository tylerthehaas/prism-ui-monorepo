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
        d="M5,1H2C1.4,1,1,1.4,1,2v12c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1V2C6,1.4,5.6,1,5,1z"
        fill={fill}
      />
      <path
        d="M14,1h-3c-0.6,0-1,0.4-1,1v12c0,0.6,0.4,1,1,1h3c0.6,0,1-0.4,1-1V2C15,1.4,14.6,1,14,1z"
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
