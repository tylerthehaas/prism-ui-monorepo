import React from 'react';
import './avatar.scss';

export type AvatarProps = {
  /** Custom class name for component */
  className?: string;
  'data-testid'?: string;
  /** Initials are used when there's no source */
  initials?: string;
  size?: 'sm' | 'md' | 'lg' | 'xs' | 'xl';
  src?: string;
};

function getAvatarContent(initials: string, src?: string) {
  if (src) {
    return <img alt="User Avatar" className="psm-avatar__img" src={src} />;
  }

  if (!src && initials) {
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

export default ({
  className = '',
  'data-testid': testid = '',
  initials = '',
  size = 'md',
  src = '',
}: AvatarProps) => {
  return (
    <div className={`psm-avatar--${size} ${className}`} data-testid={testid}>
      {getAvatarContent(initials, src)}
    </div>
  );
};
