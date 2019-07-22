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
      <circle cx="2" cy="2" data-color="color-2" fill={fill} r="2" />
      <rect fill={fill} height="2" width="10" x="6" y="1" />
      <circle cx="2" cy="8" data-color="color-2" fill={fill} r="2" />
      <rect fill={fill} height="2" width="10" x="6" y="7" />
      <circle cx="2" cy="14" data-color="color-2" fill={fill} r="2" />
      <rect fill={fill} height="2" width="10" x="6" y="13" />
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
