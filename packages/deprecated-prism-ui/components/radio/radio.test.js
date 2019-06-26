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
        idPrefix={'pre'}
        name={'radio'}
      />,
    );
    container.find('#pre-radio-0').simulate('focus');
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
        idPrefix={'pre'}
        name={'radio'}
      />,
    );
    container.find('#pre-radio-0').simulate('click');
    expect(container.state('selectedOption')).toEqual(0);
  });
  it('Removes event listners on unmount', () => {
    const remover = jest
      .spyOn(global, 'removeEventListener')
      .mockImplementation(() => {});
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
        idPrefix={'pre'}
        name={'radio'}
      />,
    );
    container.unmount();
    expect(remover).toHaveBeenCalled();
  });

  it('handles tab', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    render(<button id="show-modal-button">Show Modal</button>);
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
        idPrefix={'pre'}
        name={'radio'}
      />,
    );

    // tab with shift key
    container.setState({ isTab: false })
    map.keydown({ keyCode: 9 });
    expect(container.state('isTab')).toBe(true);
  });

  it('handles enter', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    render(<button id="show-modal-button">Show Modal</button>);
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
        idPrefix={'pre'}
        name={'radio'}
        onSelect={() => {}}
      />,
    );

    container.setState({ isFocused: 1 })
    map.keypress({ charCode: 13 });
    expect(container.state("selectedOption")).toBe(1);
    expect(container.state("isTab")).toBe(false);
  });
});
