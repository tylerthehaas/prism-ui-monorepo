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
        d="M7,14c0-1.531,0.578-2.924,1.522-3.984C8.348,10.011,8.18,10,8,10c-3.192,0-5.539,0.795-6.837,1.382 C0.45,11.705,0,12.417,0,13.2V16h7.349C7.127,15.374,7,14.702,7,14z"
        fill={fill}
      />
      <circle cx="8" cy="4" fill={fill} r="4" />
      <path
        d="M11,16c-0.256,0-0.512-0.098-0.707-0.293l-2-2l1.414-1.414L11,13.586l3.293-3.293 l1.414,1.414l-4,4C11.512,15.902,11.256,16,11,16z"
        data-color="color-2"
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
