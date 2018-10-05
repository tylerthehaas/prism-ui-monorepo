import React from "react";
import PropTypes from "prop-types";
import { values } from "ramda";

export const sizes = {
  extraLarge: "xl",
  extraSmall: "xs",
  large: "lg",
  medium: "md",
  small: "sm",
};

const getAvatarContent = (initials, src) => {
  if (src) {
    return <img alt="User Avatar" className="psm-avatar__img" src={src} />;
  }

  if (initials) {
    return <span className="psm-avatar__text">{initials}</span>;
  }

  return (
    <div className="psm-avatar__silhouette" data-testid="avatar-silhouette" />
  );
};

export const Avatar = ({ initials, size = "md", src }) => (
  <div className={`psm-avatar--${size}`}>{getAvatarContent(initials, src)}</div>
);

Avatar.propTypes = {
  initials: PropTypes.string,
  size: PropTypes.oneOf(values(sizes)),
  src: PropTypes.string,
};
