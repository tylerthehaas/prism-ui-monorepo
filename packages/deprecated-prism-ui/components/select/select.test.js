import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Select from './select';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Select />', () => {
  it('Defaults to radio', () => {
    const { container } = render(<Select />);
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-multi-select psm-multi-select--radio',
    );
  });
  it('Dropdown when dropdown is true', () => {
    const { container } = render(<Select dropdown={true} />);
    expect(container.firstChild.firstChild).toHaveClass('psm-input psm-select');
  });
  it('Multi select buttons when radio is false', () => {
    const { container } = render(<Select dropdown={false} radio={false} />);
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-multi-select undefined',
    );
  });
  it('Focus set isFocused to index', () => {
    const container = mount(<Select />);
    container.find('#option-0').simulate('focus');
    expect(container.state('isFocused')).toEqual(0);
  });
  it('Blur sets isFocused to null', () => {
    const container = mount(<Select />);
    container.find('#option-0').simulate('blur');
    expect(container.state('isFocused')).toBeNull();
  });
  it('Click sets active to index', () => {
    const container = mount(<Select dropdown={false} radio={false} />);
    container.find('#option-0').simulate('click');
    expect(container.state('active')).toEqual([0]);
  });
  it('Click calls event passed in', () => {
    const func = jest.fn();
    const container = mount(<Select dropdown={false} onClick={func} />);
    container.find('#option-0').simulate('click');
    expect(func.mock.calls).toHaveLength(1);
  });
});
