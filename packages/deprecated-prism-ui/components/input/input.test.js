import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Input from './Input';

import IconList from '../core/svg-icons/icon-list.js';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

const { mount } = Enzyme;

describe('<Input />', () => {
  it('Required defualts to false', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toHaveClass('psm-input');
  });

  it('Leading icon defaults to false', () => {
    const { container } = render(<Input icon={{ name: 'desktop' }} />);
    expect(container.firstChild).toHaveClass('psm-input-trailing-icon');
  });
  it('Uses leading icon when leading is true', () => {
    const { container } = render(
      <Input icon={{ name: 'desktop', position: 'leading' }} />,
    );
    expect(container.firstChild).toHaveClass('psm-input-leading-icon');
  });

  const iconNum = IconList.length;
  for (let i = 0; i < iconNum; i++) {
    it(`Icon type: ${IconList[i]}`, () => {
      const { container } = render(
        <Input icon={{ name: `${IconList[i]}`, position: 'leading' }} />,
      );
      expect(container.firstChild.firstChild).toHaveClass(
        `psm-icon-svg-${IconList[i]}`,
      );
      expect(container.firstChild.firstChild.firstChild).toHaveClass(
        `svg-icon-${IconList[i]}`,
      );
    });
  }

  it('Sets isClicked to true on click and false on blur', () => {
    const container = mount(
      <Input icon={{ name: 'desktop', position: 'leading' }} />,
    );
    container.find('input').simulate('click');
    expect(container.state('isClicked')).toBe(true);
    container.find('input').simulate('blur');
    expect(container.state('isClicked')).toBe(false);
  });
});
