import React from 'react';
import { render } from '@testing-library/react';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from './Button';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('Defaults to primary', () => {
    const { container } = render(<Button dropdown={false} label="Menu" />);
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-button psm-button--primary',
    );
  });
  it('Is not primary when primary is false', () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} />,
    );
    expect(container.firstChild.firstChild).toHaveClass('psm-button');
  });
  it('Defaults to Large', () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} />,
    );
    expect(container.firstChild.firstChild).not.toHaveClass(
      'psm-button psm-button--small',
    );
  });
  it('Is small when small is true', () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} small />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-button psm-button--small',
    );
  });
  it('Link defaults to false', () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} small />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-button psm-button--small',
    );
  });
  it('Is a link when link is true', () => {
    const { container } = render(
      <Button
        dropdown={false}
        label="Menu"
        linkRef="#"
        primary={false}
        small
      />,
    );
    expect(container.firstChild.firstChild.nodeName).toEqual('A');
  });

  it('receives props', () => {
    const output = mount(<Button label="Menu" onClick={() => {}} primary />);

    expect(output.find('.psm-button--primary')).toHaveLength(1);

    output.setProps({ primary: false });

    expect(output.find('.psm-button--primary')).toHaveLength(0);
  });

  it('handles click', () => {
    const func = jest.fn();
    const output = mount(<Button label="Menu" onClick={func} primary />);

    output.find('.psm-button--primary').simulate('click');

    expect(func.mock.calls).toHaveLength(1);
  });
});
