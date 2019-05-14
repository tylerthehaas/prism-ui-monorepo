/* eslint jsx-a11y/no-noninteractive-tabindex: 0 */ import React from 'react';
import './avatar.scss';

import PropTypes from 'prop-types';
import { values } from 'ramda';

export const sizes = {
  extraLarge: 'xl',
  extraSmall: 'xs',
  large: 'lg',
  medium: 'md',
  small: 'sm',
};

const getAvatarContent = (initials, src) => {
  if (src) {
    return <img alt="User Avatar" className="psm-avatar__img" src={src} />;
  }

  if (initials) {
    return <span className="psm-avatar__text">{initials}</span>;
  }

  return (
    <div
      aria-label="user avatar no image provided"
      className="psm-avatar__silhouette"
      data-testid="avatar-silhouette"
      role="img"
    />
  );
};

const Avatar = ({ initials, size = 'md', src }) => (
  <div className={`psm-avatar--${size}`} tabIndex={0}>
    {getAvatarContent(initials, src)}
  </div>
);

Avatar.propTypes = {
  initials: PropTypes.string,
  size: PropTypes.oneOf(values(sizes)),
  src: PropTypes.string,
};

export default Avatar;
