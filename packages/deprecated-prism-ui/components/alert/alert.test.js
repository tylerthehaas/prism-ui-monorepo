import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Alert, { Type } from './Alert';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Alert/>', () => {
  describe('Component Defaults', () => {
    it('defaults to Type.info', () => {
      const { container } = render(<Alert />);
      expect(container.firstChild).toHaveClass('psm-alert--info');
    });

    it('accepts children', () => {
      const { getByText } = render(
        <Alert>
          <span>Alert message</span>
        </Alert>,
      );
      expect(getByText('Alert message')).toBeInTheDocument();
    });

    it('does not define a link', () => {
      const { container } = render(<Alert />);
      expect(container.querySelector('a')).not.toBeInTheDocument();
    });
  });

  describe('Type is changed', () => {
    it('is a success type', () => {
      const { container } = render(<Alert type={Type.success} />);
      expect(container.firstChild).toHaveClass('psm-alert--success');
    });

    it('is an info type', () => {
      const { container } = render(<Alert type={Type.info} />);
      expect(container.firstChild).toHaveClass('psm-alert--info');
    });

    it('is a warning type', () => {
      const { container } = render(<Alert type={Type.warning} />);
      expect(container.firstChild).toHaveClass('psm-alert--warning');
    });

    it('is an error type', () => {
      const { container } = render(<Alert type={Type.error} />);
      expect(container.firstChild).toHaveClass('psm-alert--error');
    });
  });

  describe('Event Listeners', () => {
    it('event listener is added and removed', () => {
      const adder = jest
        .spyOn(global, 'addEventListener')
        .mockImplementation(() => {});
      const remover = jest
        .spyOn(global, 'removeEventListener')
        .mockImplementation(() => {});
      const container = mount(<Alert type={Type.success} />);
      expect(adder).toHaveBeenCalled();
      container.unmount();
      expect(remover).toHaveBeenCalled();
    });
  });

  describe('onClick functions', () => {
    it('alert-not-nub onClick funciton', () => {
      const container = mount(<Alert type={Type.success} />);
      container.find('#alert-not-nub').simulate('click');
      expect(container.find('#alert-not-nub').is(':focus')).toBe(false);
    });
    it('alert-nub-close onClick funciton', () => {
      const container = mount(<Alert type={Type.success} />);
      container.find('#alert-nub-close').simulate('click');
      expect(container.find('#alert-nub-close').is(':focus')).toBe(false);
    });
  });
});
