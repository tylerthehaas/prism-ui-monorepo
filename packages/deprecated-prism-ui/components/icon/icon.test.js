import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Icon from './Icon';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Icon />', () => {
  it('Icon type: desktop', () => {
    const { container } = render(<Icon iconName={'desktop'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-desktop');
  });
  it('Icon type: one-on-one', () => {
    const { container } = render(<Icon iconName={'one-on-one'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-one-on-one');
  });
  it('Icon type: tail-down', () => {
    const { container } = render(<Icon iconName={'tail-down'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-tail-down');
  });
  it('Icon type: send', () => {
    const { container } = render(<Icon iconName={'send'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-send');
  });
  it('Icon type: goal', () => {
    const { container } = render(<Icon iconName={'goal'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-goal');
  });
  it('Icon type: heartbeat', () => {
    const { container } = render(<Icon iconName={'heartbeat'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-heartbeat');
  });
  it('Icon type: eye', () => {
    const { container } = render(<Icon iconName={'eye'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-eye');
  });
  it('Icon type: lock', () => {
    const { container } = render(<Icon iconName={'lock'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-lock');
  });
  it('Icon type: chat', () => {
    const { container } = render(<Icon iconName={'chat'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-chat');
  });
  it('Icon type: calendar-add', () => {
    const { container } = render(<Icon iconName={'calendar-add'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-calendar-add');
  });
  it('Icon type: settings-gear', () => {
    const { container } = render(<Icon iconName={'settings-gear'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-settings-gear');
  });
  it('Icon type: simple-remove', () => {
    const { container } = render(<Icon iconName={'simple-remove'} />);
    expect(container.firstChild).toHaveClass('psm-svg-icon-simple-remove');
  });
  it('Sets props to conversation', () => {
    const container = mount(<Icon iconName={'simple-remove'} />);
    container.setProps({ iconName: 'conversation' });
    expect(container.find('.psm-svg-icon-conversation')).toHaveLength(1);
  });
  it('Test icon action', () => {
    const func = jest.fn();

    const container = mount(<Icon iconName={'simple-remove'} onClick={func} />);
    container.simulate('click');
    expect(func.mock.calls).toHaveLength(1);
  });
});
