import React, { useState } from 'react';
import './tag.scss';
import Icon from '../icon/Icon';

interface TagProps {
  /** Custom class name for component */
  className?: string;
  /** Content inside the tag */
  content: string;
  'data-testid'?: string;
}

interface TagState {
  open: boolean;
}

export const Tag = ({
  className = '',
  content = '',
  'data-testid': testid = '',
}: TagProps) => {
  const [open, setOpen] = useState<TagState['open']>(true);
  function handleClose() {
    setOpen(false);
  }
  return (
    open && (
      <div
        aria-label="tag"
        className={`psm-tag ${className}`}
        data-testid={testid}
      >
        {content}
        <button
          aria-label="Close tag"
          type="button"
          className="psm-tag__close"
          data-testid={`${testid}-icon`}
          onClick={handleClose}
        >
          <Icon iconName="close" height="8px" width="8px" fill="white" />
        </button>
      </div>
    )
  );
};

export default Tag;
