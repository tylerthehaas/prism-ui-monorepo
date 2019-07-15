import React from 'react';
import { render } from '@testing-library/react';

import Alert from './Alert';

describe('<Alert/>', () => {
  describe('Component Defaults', () => {
    it('defaults to Type.info', () => {
      const { container } = render(<Alert />);
      expect(container.firstChild).toHaveClass('psm-alert--info');
    });

    it('accepts children', () => {
      const { getByText } = render(
        <Alert alertType="info">
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
      const { container } = render(<Alert alertType="success" />);
      expect(container.firstChild).toHaveClass('psm-alert--success');
    });

    it('is an info type', () => {
      const { container } = render(<Alert alertType="info" />);
      expect(container.firstChild).toHaveClass('psm-alert--info');
    });

    it('is a warning type', () => {
      const { container } = render(<Alert alertType="warning" />);
      expect(container.firstChild).toHaveClass('psm-alert--warning');
    });

    it('is an error type', () => {
      const { container } = render(<Alert alertType="error" />);
      expect(container.firstChild).toHaveClass('psm-alert--error');
    });
  });
});
