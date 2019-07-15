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
        d="M7,9L7,9C4.8,9,3,7.2,3,5V4c0-2.2,1.8-4,4-4h0c2.2,0,4,1.8,4,4v1C11,7.2,9.2,9,7,9z"
        fill={fill}
      />
      <path d="M5,11c-2.8,0-5,2.2-5,5h8v-5H5z" fill={fill} />
      <polygon
        data-color="color-2"
        fill={fill}
        points="14,10 12,10 12,12 10,12 10,14 12,14 12,16 14,16 14,14 16,14 16,12 14,12 "
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
