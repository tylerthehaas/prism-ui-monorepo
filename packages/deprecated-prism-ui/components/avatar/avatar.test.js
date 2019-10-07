import React from 'react';
import { render } from '@testing-library/react';

import Avatar from './Avatar';

import tobias from '../../test-config/__mocks__/tobias.jpg';

describe('<Avatar/>', () => {
  it('prioritizes props.src', () => {
    const { getByAltText } = render(
      <Avatar initials="TF" size="md" src={tobias} />,
    );
    expect(getByAltText('User Avatar')).toBeInTheDocument();
  });

  it('prioritizes initials if props.src does not exist', () => {
    const { getByText } = render(<Avatar initials="TF" size="md" />);
    expect(getByText('TF')).toBeInTheDocument();
  });

  it('defaults to initials', () => {
    const { container } = render(<Avatar size="md" initials={"JV"} />);

    expect(container.querySelector('.psm-avatar__text')[0]).not.toBeNull
  });

  it('defaults to medium size', () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild.classList).toContain('psm-avatar--md');
  });

  it('sets size based on props.size', () => {
    const { container } = render(<Avatar size="sm" />);
    expect(container.firstChild.classList).toContain('psm-avatar--sm');
  });
});
