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
      <rect data-color="color-2" fill={fill} height="3" width="10" x="3" />
      <path
        d="M15,5H1C0.4,5,0,5.4,0,6v6c0,0.6,0.4,1,1,1h2v2c0,0.6,0.4,1,1,1h8c0.6,0,1-0.4,1-1v-2h2c0.6,0,1-0.4,1-1V6 C16,5.4,15.6,5,15,5z M11,14H5V9h6V14z"
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
