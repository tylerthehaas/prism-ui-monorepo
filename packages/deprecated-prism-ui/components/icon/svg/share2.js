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
      <polygon
        data-color="color-2"
        fill={fill}
        points="7,4 7,11 9,11 9,4 11.4,4 8,0 4.6,4 "
      />
      <path
        d="M15,16H1c-0.6,0-1-0.4-1-1V6c0-0.6,0.4-1,1-1h3v2H2v7h12V7h-2V5h3c0.6,0,1,0.4,1,1v9C16,15.6,15.6,16,15,16z "
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
