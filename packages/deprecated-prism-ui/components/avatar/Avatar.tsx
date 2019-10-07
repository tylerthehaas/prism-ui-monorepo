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

  return <span className="psm-avatar__text">{initials}</span>;
}

export const Avatar = ({
  className = '',
  'data-testid': testid = '',
  initials = '',
  size = 'md',
  src = '',
}: AvatarProps) => (
  <div className={`psm-avatar--${size} ${className}`} data-testid={testid}>
    {getAvatarContent(initials, src)}
  </div>
);

export default Avatar;
