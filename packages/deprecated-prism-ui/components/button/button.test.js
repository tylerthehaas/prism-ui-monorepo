import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Enzyme from 'enzyme';
import Button from './button';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Button />', () => {
  it('Has a dropdown when dropdown is true', () => {
    const { container } = render(<Button dropdown={true} label="Menu" />);
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-dropdown--primary',
    );
  });
  it('does not have a dropdown when dropdown is false', () => {
    const { container } = render(<Button dropdown={false} label="Menu" />);
    expect(container.firstChild.firstChild).not.toHaveClass(
      'psm-dropdown--primary',
    );
  });
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
      <Button dropdown={false} label="Menu" primary={false} small={true} />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-button psm-button--small',
    );
  });
  it('Link defaults to false', () => {
    const { container } = render(
      <Button dropdown={false} label="Menu" primary={false} small={true} />,
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
        linkRef={'#'}
        primary={false}
        small={true}
      />,
    );
    expect(container.firstChild.firstChild.nodeName).toEqual('A');
  });
  it('dropdownMenuClick function should click menu option', () => {
    const output = mount(
      <Button
        dropdown={true}
        dropdownActions={[{ label: 'menu item', onClick: () => {} }]}
        label="Menu"
        showMenu={true}
      />,
    );

    expect(output.find('.psm-dropdown__li')).toHaveLength(1);

    output.find('.psm-dropdown__li').simulate('click');

    expect(output.find('.psm-dropdown__li')).toHaveLength(0);
  });

  it('receives props', () => {
    const output = mount(
      <Button label="Menu" onClick={() => {}} primary={true} />,
    );

    expect(output.find('.psm-button--primary')).toHaveLength(1);

    output.setProps({ primary: false });

    expect(output.find('.psm-button--primary')).toHaveLength(0);
  });

  it('handles click', () => {
    const func = jest.fn();
    const output = mount(<Button label="Menu" onClick={func} primary={true} />);

    output.find('.psm-button--primary').simulate('click');

    expect(func.mock.calls).toHaveLength(1);
  });

  it('handles blur', () => {
    const output = mount(
      <Button
        dropdown={true}
        dropdownActions={[{ label: 'menu item', onClick: () => {} }]}
        label="Menu"
        showMenu={true}
      />,
    );

    expect(output.find('.psm-dropdown__li')).toHaveLength(1);

    output.simulate('blur');

    expect(output.find('.psm-dropdown__li')).toHaveLength(0);
  });
});
