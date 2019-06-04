import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Icon from './Icon';

import IconList from '../core/svg-icons/icon-list';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Icon />', () => {
  const iconNum = IconList.length;
  for (let i = 0; i < iconNum; i++) {
    it(`Icon type: ${IconList[i]}`, () => {
      const { container } = render(<Icon iconName={IconList[i]} />);
      expect(container.firstChild).toHaveClass(`psm-svg-icon-${IconList[i]}`);
      expect(container.firstChild.firstChild).toHaveClass(
        `svg-icon-${IconList[i]}`,
      );
    });
  }
  it('Test icon action', () => {
    const func = jest.fn();
    const container = mount(<Icon IconName={'simple-remove'} onClick={func} />);
    container.simulate('click');
    expect(func.mock.calls).toHaveLength(1);
  });
});
