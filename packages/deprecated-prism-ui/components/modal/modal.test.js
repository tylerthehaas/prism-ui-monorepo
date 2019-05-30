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
});
