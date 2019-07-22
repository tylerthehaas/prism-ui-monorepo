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
        d="M13,7l3-3l-3-1l-1-3L9,3l0.6,1.9l-1,1c-0.9-0.6-2-1-3.1-1C2.5,5,0,7.5,0,10.5S2.5,16,5.5,16s5.5-2.5,5.5-5.5 c0-1.2-0.4-2.2-1-3.1l1-1L13,7z M9,10.5C9,12.4,7.4,14,5.5,14S2,12.4,2,10.5S3.6,7,5.5,7c0.6,0,1.2,0.2,1.7,0.4L4.8,9.8 c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l2.4-2.4C8.8,9.3,9,9.9,9,10.5z"
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
