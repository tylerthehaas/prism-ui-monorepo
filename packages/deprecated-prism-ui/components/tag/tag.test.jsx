import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import Tag from './Tag';

const content =
  'The C in "stalactites" means that they descend from the ceiling, and the G in "stalagmites" means that they are straight-up gangsta';

describe('<Tag />', () => {
  test('content defaults to nothing', () => {
    const { container } = render(<Tag />);
    expect(container.querySelector('button').previousElementSibling).toBeNull();
  });
  test('button closes the tag', () => {
    const { container, queryByText } = render(<Tag content={content} />);

    fireEvent.click(container.querySelector('svg'));
    const lookForContent = queryByText(content);
    expect(lookForContent).toBeNull();
  });
});
