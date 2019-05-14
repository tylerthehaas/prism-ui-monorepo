import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Radio from './Radio';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Radio />', () => {
  it('Checked defaults to first option', () => {
    const { container } = render(
      <Radio
        buttons={[
          {
            text: 'Option 1',
            onClick: () => {},
            checked: true,
          },
          {
            text: 'Option 2',
            onClick: () => {},
            checked: false,
          },
        ]}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveProperty(
      'checked',
    );
  });
  it('Option 2 is checked', () => {
    const { container } = render(
      <Radio
        buttons={[
          {
            text: 'Option 1',
            onClick: () => {},
            checked: false,
          },
          {
            text: 'Option 2',
            onClick: () => {},
            checked: true,
          },
        ]}
      />,
    );
    expect(container.firstChild.lastChild.firstChild).toHaveProperty('checked');
  });
  it('OnFocus sets isFocused to current index', () => {
    const container = mount(
      <Radio
        buttons={[
          {
            text: 'Option 1',
            action: () => {},
            checked: false,
          },
          {
            text: 'Option 2',
            action: () => {},
            checked: true,
          },
        ]}
        idPrefix={'1'}
      />,
    );
    container.find('#radio-div-0').simulate('focus');
    expect(container.state('isFocused')).toEqual(0);
  });
  it('CLick sets selectedOption to current index', () => {
    const container = mount(
      <Radio
        buttons={[
          {
            text: 'Option 1',
            action: () => {},
            checked: false,
          },
          {
            text: 'Option 2',
            action: () => {},
            checked: true,
          },
        ]}
        idPrefix={'1'}
      />,
    );
    container.find('#radio-div-0').simulate('click');
    expect(container.state('selectedOption')).toEqual(0);
  });
});
