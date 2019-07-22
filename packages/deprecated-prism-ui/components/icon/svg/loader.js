import React from 'react';
import PropTypes from 'prop-types';

const SVG = ({
  height = '64px',
  width = '64px',
  className = '',
  viewBox = '0 0 100 100',
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
    <circle
      cx="50"
      cy="50"
      fill="none"
      ng-attr-r="{{config.radius}}"
      ng-attr-stroke="{{config.color}}"
      ng-attr-stroke-dasharray="{{config.dasharray}}"
      ng-attr-strokewidth="{{config.width}}"
      r="35"
      stroke="#000000"
      strokeDasharray="164.93361431346415 56.97787143782138"
      strokeWidth="3"
      transform="rotate(48 50 50)"
    >
      <animateTransform
        attributeName="transform"
        begin="0s"
        calcMode="linear"
        dur="1s"
        keyTimes="0;1"
        repeatCount="indefinite"
        type="rotate"
        values="0 50 50;360 50 50"
      />
    </circle>
  </svg>
);

SVG.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  className: PropTypes.string,
  viewBox: PropTypes.string,
};

export default SVG;
