import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Alert, { Style, Type } from './alert';

describe('<Alert/>', () => {
  describe('Component Defaults', () => {
    it('defaults to Style.info', () => {
      const { container } = render(<Alert />);
      expect(container.firstChild).toHaveClass('psm-alert--info');
    });

    it("defaults to 'Alert message'", () => {
      const { getByText } = render(<Alert />);
      expect(getByText('Alert message')).toBeInTheDocument();
    });

    it('does not define a link', () => {
      const { container } = render(<Alert />);
      expect(container.querySelector('a')).not.toBeInTheDocument();
    });
  });

  describe('Style is changed', () => {
    it('is a success type', () => {
      const { container } = render(<Alert style={Style.success} />);
      expect(container.firstChild).toHaveClass('psm-alert--success');
    });

    it('is an info type', () => {
      const { container } = render(<Alert style={Style.info} />);
      expect(container.firstChild).toHaveClass('psm-alert--info');
    });

    it('is a warning type', () => {
      const { container } = render(<Alert style={Style.warning} />);
      expect(container.firstChild).toHaveClass('psm-alert--warning');
    });

    it('is an error type', () => {
      const { container } = render(<Alert style={Style.error} />);
      expect(container.firstChild).toHaveClass('psm-alert--error');
    });
  });

  describe('Message is defined', () => {
    it('uses the custom message', () => {
      const alertMessage = 'A custom alert message';
      const { getByText } = render(<Alert message={alertMessage} />);
      expect(getByText(alertMessage)).toBeInTheDocument();
    });
  });

  describe('Alert with a link', () => {
    it('includes a link', () => {
      const link = { text: 'Alert link', href: '#' };
      const { getByText } = render(<Alert link={link} />);
      expect(getByText('Alert link')).toBeInTheDocument();
    });
  });

  describe('Type is changed', () => {
    it('is a basic alert', () => {
      const { container } = render(<Alert type={Type.basic} />);
      expect(container.querySelector('i')).toHaveClass('psm-alert__close');
    });

    it('is a button alert', () => {
      const { container } = render(
        <Alert button={{ text: 'Button', onClick: null }} type={Type.button} />,
      );
      expect(container.querySelector('button')).toHaveClass('psm-alert__btn');
    });

    it('is an inline alert', () => {
      const { container } = render(
        <Alert link={{ text: 'Link', href: null }} type={Type.inline} />,
      );
      expect(container.firstChild).toHaveClass('psm-alert--inline');
    });
  });

  describe('Dismissed', () => {
    it('removes the element', () => {
      const { container } = render(<Alert />);
      fireEvent.click(container.querySelector('i'));
      expect(container).toBeEmpty();
    });
  });
});
