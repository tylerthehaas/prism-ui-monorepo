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
    focusable="false"
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
        d="M3.6,9.6v4.9c0,0.7,0.8,1,1.3,0.5l2.3-2.7l4.7,3.5c0.4,0.3,1,0.1,1.1-0.4L16,0.9c0.1-0.6-0.4-1-1-0.8 L0.5,5.9c-0.5,0.2-0.6,0.9-0.2,1.3l1.6,1.2l4.6-2.2C6.9,6,7.2,6.5,6.9,6.7L3.6,9.6z"
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
