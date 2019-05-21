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
        d="M0,0v4c0,2.0654778,1.6036862,4,4.1414185,4c0.3443604,1.3294678,1.3492432,2.3786011,2.6487427,2.793457 C6.6119995,11.7305908,6.2819824,12.9043579,5.6672363,14H4v2h8v-2h-1.6672363 c-0.6147461-1.0956421-0.9447632-2.2694092-1.1229248-3.206543C10.5093384,10.3786011,11.5142212,9.3294678,11.8585815,8 C14.3879404,8,16,6.0717807,16,4V0H0z M2,4V2h2v4C2.8974609,6,2,5.1030273,2,4z M14,4c0,1.1030273-0.8974609,2-2,2V2h2V4z"
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
