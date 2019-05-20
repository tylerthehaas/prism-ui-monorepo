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
    <g fill="none" fillRule="evenodd" id="Style" stroke="none" strokeWidth="1">
      <g
        fill={fill}
        fillRule="nonzero"
        id="1---Tanner-UI_Iconography"
        transform="translate(-946.000000, -733.000000)"
      >
        <g id="circle-08" transform="translate(946.000000, 733.000000)">
          <circle cx="8" cy="7" id="Oval" r="3" />
          <path
            d="M8,0 C3.6,0 0,3.6 0,8 C0,12.4 3.6,16 8,16 C12.4,16 16,12.4 16,8 C16,3.6 12.4,0 8,0 Z M12,12.4 C11.4,11.7 10.6,11 9,11 L7,11 C5.4,11 4.6,11.7 4,12.4 C2.8,11.3 2,9.8 2,8 C2,4.7 4.7,2 8,2 C11.3,2 14,4.7 14,8 C14,9.8 13.2,11.3 12,12.4 Z"
            id="Shape"
          />
        </g>
      </g>
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
