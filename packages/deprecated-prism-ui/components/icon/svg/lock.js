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
        d="M8,0C5.8,0,4,1.8,4,4v1H2C1.4,5,1,5.4,1,6v9c0,0.6,0.4,1,1,1h12c0.6,0,1-0.4,1-1V6c0-0.6-0.4-1-1-1h-2V4 C12,1.8,10.2,0,8,0z M9,11.7V13H7v-1.3c-0.6-0.3-1-1-1-1.7c0-1.1,0.9-2,2-2s2,0.9,2,2C10,10.7,9.6,11.4,9,11.7z M10,5H6V4 c0-1.1,0.9-2,2-2s2,0.9,2,2V5z"
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
