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
    <g
      fill="none"
      fillRule="evenodd"
      id="Buget_Tool_V4"
      stroke="none"
      strokeWidth="1"
    >
      <g
        fill={fill}
        id="25_Assigning_popup_for_admins_viewers_to_Business_Unit"
        transform="translate(-379.000000, -222.000000)"
      >
        <g id="Group-20">
          <g id="Group-21-Copy-4" transform="translate(375.000000, 218.000000)">
            <g id="Profile-Copy-3">
              <g id="Group" transform="translate(4.000000, 4.000000)">
                <g id="Group-6">
                  <circle cx="8" cy="4" id="Oval" r="4" />
                  <path
                    d="M16,13.2 C16,12.417 15.55,11.705 14.837,11.382 C13.539,10.795 11.192,10 8,10 C4.808,10 2.461,10.795 1.163,11.382 C0.45,11.705 0,12.417 0,13.2 L0,16 L16,16 L16,13.2 Z"
                    id="Shape"
                  />
                </g>
              </g>
            </g>
          </g>
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
