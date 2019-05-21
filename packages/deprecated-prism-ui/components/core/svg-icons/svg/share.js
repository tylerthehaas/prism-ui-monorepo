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
        d="M12,6c1.654,0,3-1.346,3-3s-1.346-3-3-3S9,1.346,9,3c0,0.223,0.029,0.439,0.075,0.649l-3.22,2.012 C5.343,5.254,4.704,5,4,5C2.346,5,1,6.346,1,8s1.346,3,3,3c0.704,0,1.343-0.254,1.855-0.661l3.22,2.012C9.029,12.561,9,12.777,9,13 c0,1.654,1.346,3,3,3s3-1.346,3-3s-1.346-3-3-3c-0.704,0-1.343,0.254-1.855,0.661l-3.22-2.012C6.971,8.439,7,8.223,7,8 S6.971,7.561,6.925,7.351l3.22-2.012C10.657,5.746,11.296,6,12,6z"
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
