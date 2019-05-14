import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Nav from './Nav';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Nav />', () => {
  it('Active defaults to 0', () => {
    const { container } = render(
      <Nav tabs={['Recieved', 'Given', 'Personal']} />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-nav__tab psm-nav__active',
    );
  });
  it('Active sets to 1 when 1 is selected', () => {
    const { container } = render(
      <Nav active={1} tabs={['Recieved', 'Given', 'Personal']} />,
    );
    expect(container.firstChild.firstChild.nextSibling).toHaveClass(
      'psm-nav__tab psm-nav__active',
    );
  });
  it('Active sets to 1 when 1 is selected #2', () => {
    const { container } = render(
      <Nav active={2} tabs={['Recieved', 'Given', 'Personal']} />,
    );
    expect(container.firstChild.lastChild).toHaveClass(
      'psm-nav__tab psm-nav__active',
    );
  });
  it('On focus sets isFocused to current index', () => {
    const container = mount(<Nav tabs={['Recieved', 'Given', 'Personal']} />);
    container.find('#tab-0').simulate('focus');
    expect(container.state('isFocused')).toEqual(0);
  });
  it('OnClick sets active to current index', () => {
    const container = mount(<Nav tabs={['Recieved', 'Given', 'Personal']} />);
    container.find('#tab-1').simulate('click');
    expect(container.state('active')).toEqual(1);
  });
  it('Enter sets tab to false', () => {
    const container = mount(<Nav tabs={['Recieved', 'Given', 'Personal']} />);
    container.find('#tab-1').simulate('keypress', { charCode: '13' });
    expect(container.state('isTab')).toEqual(false);
  });
});
