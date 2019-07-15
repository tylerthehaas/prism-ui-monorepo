import React from 'react';
import './tag.scss';

type TagProps = {
  content: string;
  'data-testid'?: string;
};

export const Tag = ({ content = '', 'data-testid': testid = '' }: TagProps) => {
  return (
    <span aria-label="tag" className="psm-tag" data-testid={testid}>
      {' '}
      {content}
    </span>
  );
};
