import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Toggle from './Toggle';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Toggle />', () => {
  it('Defaults to false', () => {
    const { container } = render(<Toggle />);
    expect(container.firstChild).toHaveClass('psm-toggle psm-toggle--inactive');
  });
  it('Handles click', () => {
    const container = mount(<Toggle active={true} isTab={true} />);
    container.find('.psm-toggle').simulate('click');
    expect(container.state('isTab')).toBe(false);
  });
  it('Removes event listeners on unmount', () => {
    const remover = jest
        .spyOn(global, 'removeEventListener')
        .mockImplementation(() => {});
    const container = mount(<Toggle />);
    container.unmount();
    expect(remover).toHaveBeenCalled(); 
  });
  it('Handles enter', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const container = mount(<Toggle />);
    container.setState({ active: false })
    map.keypress({ charCode: 13 });
    expect(container.state("active")).toBe(true);
    container.setState({ active: false })
    map.keypress({ charCode: 32 });
    expect(container.state("active")).toBe(true);
  });
  it('Handles tab', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const container = mount(<Toggle />);
    container.setState({ isTab: false })
    map.keydown({ keyCode: 9 });
    expect(container.state("isTab")).toBe(true);
  });
  it('Handles handleToggle prop', () => {
    const func = jest.fn();
    const container = mount(<Toggle handleToggle={func} />);
    container.find('.psm-toggle').simulate('click');
    expect(func.mock.calls).toHaveLength(1);
  });
});
