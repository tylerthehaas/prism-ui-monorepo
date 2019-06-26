import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import List from './List';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<List />', () => {
  it('Size is large when large is selected', () => {
    const { container } = render(
      <List
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Large'}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'psm-list__row psm-list__row-lg',
    );
  });
  it('Size is small when small is selected', () => {
    const { container } = render(
      <List
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Small'}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'psm-list__row psm-list__row-sm',
    );
  });
  it('Size is medium with medium is selected', () => {
    const { container } = render(
      <List
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Medium'}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'psm-list__row psm-list__row-md',
    );
  });
  it('Row and column test', () => {
    const { container } = render(
      <List
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
              {
                text: 'Button',
                isButton: true,
                buttonPrimary: true,
              },
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
          {
            columns: [
              {
                text: 'Button',
                isButton: true,
                buttonPrimary: true,
              },
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Medium'}
      />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'psm-list__row psm-list__row-md',
    );
  });
  it('Prop changes row size', () => {
    const container = mount(
      <List
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Small'}
      />,
    );
    container.setProps({ size: 'Large' });
    expect(container.find('.psm-list__row.psm-list__row-lg')).toHaveLength(1);
  });
  it('Focus functions sets focued to current column and row', () => {
    const container = mount(
      <List
        idPrefix={'a1'}
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Small'}
      />,
    );
    container.find('#a1-row-0-column-div-0').simulate('focus');
    expect(container.state('isFocusedColumn')).toEqual(0);
    expect(container.state('isFocusedRow')).toEqual(0);
  });

  it('OnClick sets isTab to false on index=0 and not a button', () => {
    const container = mount(
      <List
        idPrefix={'a1'}
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Small'}
      />,
    );
    container.setState({ isTab: true });
    expect(container.state('isTab')).toEqual(true);
    container.find('#a1-row-0-column-div-0').simulate('click');
    expect(container.state('isTab')).toEqual(false);
  });

  it('OnClick sets tab to false when index != 0 and not a button', () => {
    const container = mount(
      <List
        idPrefix="a1"
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Large'}
      />,
    );
    container.setState({ isTab: true });
    expect(container.state('isTab')).toEqual(true);
    container.find('#a1-row-0-column-div-1').simulate('click');
    expect(container.state('isTab')).toBe(false);
  });

  it('OnClick sets tab to false with button', () => {
    const container = mount(
      <List
        idPrefix="a1"
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Large'}
      />,
    );
    container.setState({ isTab: true });
    expect(container.state('isTab')).toEqual(true);
    container.find('#a1-row-0-column-div-0').simulate('click');
    expect(container.state('isTab')).toBe(false);
  });

  it('OnClick sets tab to false and calls function', () => {
    const container = mount(
      <List
        idPrefix="a1"
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
                onClick: () => {},
              },
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
                onClick: () => {},
              },
            ],
          },
        ]}
        size={'Large'}
      />,
    );
    container.find('#a1-row-0-column-div-1').simulate('click');
    expect(container.prop('onClick')).toBe(container.instance().onClick);
    expect(container.state('isTab')).toBe(false);
  });

  it('Removes event listeners on unmount', () => {
    const remover = jest
      .spyOn(global, 'removeEventListener')
      .mockImplementation(() => {});
    const container = mount(
      <List
        idPrefix="a1"
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: false,
                buttonPrimary: true,
              },
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
                onClick: () => {},
              },
            ],
          },
        ]}
        size={'Large'}
      />,
    );
    container.unmount();
    expect(remover).toHaveBeenCalled();
  });

  it('handles enter', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const container = mount(
      <List
        idPrefix="a1"
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Large'}
      />,
    );
    map.keypress({ charCode: 13 })
    expect(container.state('isTab')).toBe(false);
  });

  it('handles arrow keys', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const container = mount(
      <List
        idPrefix="a1"
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
              },
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
              },
            ],
          },
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
              },
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Large'}
      />, { attachTo: document.body }
    );

    // left arrow - keyCode: 37
    expect(container.state('isTab')).toBe(false);
    container.setState({ isFocusedColumn: 1 });
    map.keydown({ keyCode: 37 })
    expect(container.state('isFocusedColumn')).toBe(0);
    expect(container.state('isTab')).toBe(true);
    container.setState({ isFocusedColumn: 0 });
    map.keydown({ keyCode: 37 })
    expect(container.state('isFocusedColumn')).toBe(1);

    // up arrow - keyCode: 38
    container.setState({ isFocusedRow: 1, isTab: false});
    map.keydown({ keyCode: 38 })
    expect(container.state('isFocusedRow')).toBe(0);
    expect(container.state('isTab')).toBe(true);
    container.setState({ isFocusedRow: 0 });
    map.keydown({ keyCode: 38 })
    expect(container.state('isFocusedRow')).toBe(1);

    // right arrow - keyCode: 39
    container.setState({ isFocusedColumn: 0, isTab: false });
    map.keydown({ keyCode: 39 })
    expect(container.state('isFocusedColumn')).toBe(1);
    expect(container.state('isTab')).toBe(true);
    container.setState({ isFocusedColumn: 1 });
    map.keydown({ keyCode: 39 })
    expect(container.state('isFocusedColumn')).toBe(0);

    // down arrow - keyCode: 40
    container.setState({ isFocusedRow: 0, isTab: false});
    map.keydown({ keyCode: 40 })
    expect(container.state('isFocusedRow')).toBe(1);
    expect(container.state('isTab')).toBe(true);
    container.setState({ isFocusedRow: 1 });
    map.keydown({ keyCode: 40 })
    expect(container.state('isFocusedRow')).toBe(0);
  });

  it('handles tab', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    const container = mount(
      <List
        idPrefix="a1"
        rows={[
          {
            columns: [
              {
                text: 'Empty Row',
                isButton: true,
                buttonPrimary: true,
              },
            ],
          },
        ]}
        size={'Large'}
      />,
    );
    container.setState({ isTab: false })
    map.keydown({ keyCode: 9 })
    expect(container.state('isTab')).toBe(true);
  });
});
