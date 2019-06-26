import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Modal from './Modal';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Modal />', () => {
  it('Shows when show is true', () => {
    const { container } = render(<Modal show={true} />);
    expect(container.firstChild).toHaveClass('psm-modal--show');
  });
  it('Have default close', () => {
    const { container } = render(<Modal show={true} />);
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'psm-modal__close',
    );
  });
  it('Button focus sets state sets focus to index', () => {
    const container = mount(
      <Modal
        actions={[
          {
            action: () => {},
            label: 'Button',
            primary: true,
          },
        ]}
        dataTestId="1"
        modalButtonId="show-modal-button"
        show={true}
        title="Modal Header"
      >
        <p>
          Paragraph text that is contained inside the modal body. Paragraph text
          that is contained inside the modal body. Paragraph text that is
          contained inside the modal body.
        </p>
      </Modal>,
    );
    container.find('#button-0').simulate('focus');
    expect(container.state('isFocused')).toEqual(0);
  });
  it('Body Focus sets state sets focus to index', () => {
    const container = mount(
      <Modal
        actions={[
          {
            action: () => {},
            label: 'Button',
            primary: true,
          },
        ]}
        dataTestId="1"
        modalButtonId="show-modal-button"
        show={true}
        title="Modal Header"
      >
        <p>
          Paragraph text that is contained inside the modal body. Paragraph text
          that is contained inside the modal body. Paragraph text that is
          contained inside the modal body.
        </p>
      </Modal>,
    );
    container.find('#button-4').simulate('focus');
    expect(container.state('isFocused')).toEqual(4);
  });
  it('Close Icon focus sets state sets focus to index', () => {
    const container = mount(
      <Modal
        actions={[
          {
            action: () => {},
            label: 'Button',
            primary: true,
          },
        ]}
        dataTestId="1"
        modalButtonId="show-modal-button"
        show={true}
        title="Modal Header"
      >
        <p>
          Paragraph text that is contained inside the modal body. Paragraph text
          that is contained inside the modal body. Paragraph text that is
          contained inside the modal body.
        </p>
      </Modal>,
    );
    container.find('#button-2').simulate('focus');
    expect(container.state('isFocused')).toEqual(2);
  });
  it('Close Icon closes modal', () => {
    const func = jest.fn();
    const container = mount(
      <Modal
        dataTestId="1"
        modalButtonId="show-modal-button"
        onClose={func}
        show={true}
        title="Modal Header"
      >
        <p>
          Paragraph text that is contained inside the modal body. Paragraph text
          that is contained inside the modal body. Paragraph text that is
          contained inside the modal body.
        </p>
      </Modal>,
    );
    container.find('#button-1').simulate('click');
    expect(container.state('show')).toEqual(false);
    expect(func.mock.calls).toHaveLength(1);
  });
  it('Header Icon focus sets state sets focus to index', () => {
    const container = mount(
      <Modal
        actions={[
          {
            action: () => {},
            label: 'Button',
            primary: true,
          },
        ]}
        dataTestId="1"
        modalButtonId="show-modal-button"
        show={true}
        title="Modal Header"
      >
        <p>
          Paragraph text that is contained inside the modal body. Paragraph text
          that is contained inside the modal body. Paragraph text that is
          contained inside the modal body.
        </p>
      </Modal>,
    );
    container.find('#button-3').simulate('focus');
    expect(container.state('isFocused')).toEqual(3);
  });

  it('handles enter', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    render(<button id="show-modal-button">Show Modal</button>);
    const container = mount(
      <Modal
        actions={[
          {
            // eslint-disable-next-line no-console
            action: () => {console.log('some action')},
            label: 'Button',
            primary: true,
          },
        ]}
        dataTestId="1"
        modalButtonId="show-modal-button"
        show={true}
        title="Modal Header"
      >
        <p>
          Paragraph text that is contained inside the modal body. Paragraph text
          that is contained inside the modal body. Paragraph text that is
          contained inside the modal body.
        </p>
      </Modal>,
    );
    const clickFunction = jest
        .spyOn(container.instance(), 'handleClick')
        .mockImplementation(() => {});
    container.setState({ isFocused: 2, show: true });
    map.keypress({ charCode: 13 });
    expect(container.state('show')).toBe(false);
    container.setState({ isFocused: 0});
    map.keypress({ charCode: 13 });
    container.update();
    expect(clickFunction).toHaveBeenCalled();
  });

  it('handles tab', () => {
    const map = {};
    document.addEventListener = jest.fn((event, cb) => {
      map[event] = cb;
    });
    render(<button id="show-modal-button">Show Modal</button>);
    const container = mount(
      <Modal
        actions={[
          {
            // eslint-disable-next-line no-console
            actions: () => {console.log('some action')},
            label: 'Button',
            primary: true,
          },
          {
            // eslint-disable-next-line no-console
            actions: () => {console.log('another action')},
            label: 'Button',
            primary: true,
          },
        ]}
        dataTestId="1"
        modalButtonId="show-modal-button"
        show={true}
        title="Modal Header"
      >
        <p>
          Paragraph text that is contained inside the modal body. Paragraph text
          that is contained inside the modal body. Paragraph text that is
          contained inside the modal body.
        </p>
      </Modal>, { attachTo: document.body }
    );

    // tab with shift key
    container.setState({ isFocused: 1 })
    map.keydown({ keyCode: 9, shiftKey: true, preventDefault: jest.fn() });
    expect(container.state('isFocused')).toBe(5);
    container.setState({ isFocused: 0 })
    map.keydown({ keyCode: 9, shiftKey: true, preventDefault: jest.fn() });
    expect(container.state('isFocused')).toBe(1);
    container.setState({ isFocused: 3 })
    map.keydown({ keyCode: 9, shiftKey: true, preventDefault: jest.fn() });
    expect(container.state('isFocused')).toBe(0);
    container.setState({ isFocused: 4 })
    map.keydown({ keyCode: 9, shiftKey: true, preventDefault: jest.fn() });
    expect(container.state('isFocused')).toBe(3);

    // tab without shift key
    container.setState({ isFocused: 0 })
    map.keydown({ keyCode: 9, preventDefault: jest.fn() });
    expect(container.state('isFocused')).toBe(3);
    container.setState({ isFocused: 1 })
    map.keydown({ keyCode: 9, preventDefault: jest.fn() });
    expect(container.state('isFocused')).toBe(0);
    container.setState({ isFocused: 5 })
    map.keydown({ keyCode: 9, preventDefault: jest.fn() });
    expect(container.state('isFocused')).toBe(1);
    container.setState({ isFocused: 4 })
    map.keydown({ keyCode: 9, preventDefault: jest.fn() });
    expect(container.state('isFocused')).toBe(5);

    // esc key
    // container.setState({ show: true })
    // map.keydown({ keyCode: 27 });
    // expect(container.state('show')).toBe(false);
  });

  it('removes event listeners on unmount', () => {
    const remover = jest
        .spyOn(global, 'removeEventListener')
        .mockImplementation(() => {});
    // render(<button id="show-modal-button">Show Modal</button>);
    const container = mount(
      <Modal
        actions={[
          {
            // eslint-disable-next-line no-console
            actions: () => {console.log('some action')},
            label: 'Button',
            primary: true,
          },
        ]}
        dataTestId="1"
        modalButtonId="show-modal-button"
        show={true}
        title="Modal Header"
      >
        <p>
          Paragraph text that is contained inside the modal body. Paragraph text
          that is contained inside the modal body. Paragraph text that is
          contained inside the modal body.
        </p>
      </Modal>
    );
    container.unmount();
    expect(remover).toHaveBeenCalled();
  });  
});
