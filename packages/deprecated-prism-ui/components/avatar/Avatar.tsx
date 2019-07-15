import React from 'react';
import './avatar.scss';

export type AvatarProps = {
  'data-testid'?: string;
  /** Initials are used when there's no source */
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xs' | 'xl';
  src?: string;
};

function getAvatarContent(initials?: string, src?: string) {
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
}

export const Avatar = ({
  size = 'md',
  initials = '',
  'data-testid': testid = '',
  src = '',
}: AvatarProps) => (
  <div className={`psm-avatar--${size}`} data-testid={testid}>
    {getAvatarContent(initials, src)}
  </div>
);

export default Avatar;
