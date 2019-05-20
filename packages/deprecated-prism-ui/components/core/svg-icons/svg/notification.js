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
        d="M10,14H6c0,1.1,0.9,2,2,2S10,15.1,10,14z"
        data-color="color-2"
        fill={fill}
      />
      <path
        d="M15,11h-0.5C13.8,10.3,13,9.3,13,8V5c0-2.8-2.2-5-5-5S3,2.2,3,5v3c0,1.3-0.8,2.3-1.5,3H1c-0.6,0-1,0.4-1,1 s0.4,1,1,1h14c0.6,0,1-0.4,1-1S15.6,11,15,11z"
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
