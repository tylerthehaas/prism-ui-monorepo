import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Avatar, { sizes } from './avatar';

import tobias from '../../docs/images/tobias.jpg';

describe('<Avatar/>', () => {
  it('prioritizes props.src', () => {
    const { getByAltText } = render(
      <Avatar initials="TF" size={sizes.medium} src={tobias} />,
    );
    expect(getByAltText('User Avatar')).toBeInTheDocument();
  });

  it('prioritizes initials if props.src does not exist', () => {
    const { getByText } = render(<Avatar initials="TF" size={sizes.medium} />);
    expect(getByText('TF')).toBeInTheDocument();
  });

  it('falls back to the default silhouette', () => {
    const { getByTestId } = render(<Avatar size={sizes.medium} />);
    expect(getByTestId('avatar-silhouette')).toBeInTheDocument();
  });

  it('defaults to medium size', () => {
    const { container } = render(<Avatar />);
    expect(container.firstChild).toHaveClass('psm-avatar--md');
  });

  it('sets size based on props.size', () => {
    const { container } = render(<Avatar size={sizes.small} />);
    expect(container.firstChild).toHaveClass('psm-avatar--sm');
  });
});
