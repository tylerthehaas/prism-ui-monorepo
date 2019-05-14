import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Card from './Card';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Card />', () => {
  it('Defaults to shadow type 1', () => {
    const { container } = render(<Card />);
    expect(container.firstChild).toHaveClass('psm-card psm-card--shadow-1');
  });
  it('Shadow Type 1', () => {
    const { container } = render(<Card shadowType={'sm'} />);
    expect(container.firstChild).toHaveClass('psm-card psm-card--shadow-1');
  });
  it('Shadow Type 2', () => {
    const { container } = render(<Card shadowType={'md'} />);
    expect(container.firstChild).toHaveClass('psm-card psm-card--shadow-2');
  });
  it('Shadow Type 3', () => {
    const { container } = render(<Card shadowType={'lg'} />);
    expect(container.firstChild).toHaveClass('psm-card psm-card--shadow-3');
  });
  it('Sets props to shadow type 1', () => {
    const container = mount(<Card shadowType={'sm'} />);
    container.setProps({ shadowType: 'md' });
    expect(container.find('.psm-card.psm-card--shadow-2')).toHaveLength(1);
  });
});
