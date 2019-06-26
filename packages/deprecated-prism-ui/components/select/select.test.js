import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Select from './Select';

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
  it('Removes event listeners on unmount', () => {
    const remover = jest
        .spyOn(global, 'removeEventListener')
        .mockImplementation(() => {});
    const container = mount(<Select dropdown={false} />);
    container.unmount();
    expect(remover).toHaveBeenCalled();
  });
  it('Handle enter calls handleClick', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const container = mount(<Select dropdown={false} radio={true} />);
    container.setState({ isFocused: 1, radioActive: 1 })
    map.keypress({ charCode: 13 });
    expect(container.state("radioActive")).toBeNull();
  });
  it('Handle tab', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const container = mount(<Select dropdown={false} />);
    map.keydown({ keyCode: 9 });
    expect(container.state("isTab")).toBe(true);
  });
});
