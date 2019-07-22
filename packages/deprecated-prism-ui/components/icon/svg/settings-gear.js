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
        d="M13.3,5.2l1.1-2.1l-1.4-1.4l-2.1,1.1c-0.3-0.2-0.7-0.3-1.1-0.4L9,0H7L6.2,2.3C5.9,2.4,5.5,2.5,5.2,2.7 L3.1,1.6L1.6,3.1l1.1,2.1C2.5,5.5,2.4,5.9,2.3,6.2L0,7v2l2.3,0.8c0.1,0.4,0.3,0.7,0.4,1.1l-1.1,2.1l1.4,1.4l2.1-1.1 c0.3,0.2,0.7,0.3,1.1,0.4L7,16h2l0.8-2.3c0.4-0.1,0.7-0.3,1.1-0.4l2.1,1.1l1.4-1.4l-1.1-2.1c0.2-0.3,0.3-0.7,0.4-1.1L16,9V7 l-2.3-0.8C13.6,5.9,13.5,5.5,13.3,5.2z M8,11c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S9.7,11,8,11z"
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
