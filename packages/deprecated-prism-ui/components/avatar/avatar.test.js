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

  it('falls back to the default silhouette', () => {
    const { getByTestId } = render(<Avatar size="md" />);
    expect(getByTestId('avatar-silhouette')).toBeInTheDocument();
  });

  it('defaults to medium size', () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).toHaveClass('psm-avatar--md');
  });

  it('sets size based on props.size', () => {
    const { container } = render(<Avatar size="sm" />);
    expect(container.firstChild).toHaveClass('psm-avatar--sm');
  });
});
