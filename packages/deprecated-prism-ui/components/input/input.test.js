import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Input from './Input';

import Enzyme from 'enzyme';
const { mount } = Enzyme;
import Adapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new Adapter() });

describe('<Input />', () => {
  it('Required defualts to false', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toHaveClass('psm-input');
  });

  // it("Is required when required is true", () => {
  //   const { container } = render(<Input required={true} />);
  //   expect(container.firstChild).toHaveClass("psm-input psm-input--active");
  // });

  // it("Updates state with new props", () => {
  //   const output = mount(<Input required={false} />);

  //   output.setProps({ required: true });

  //   expect(output.find(".psm-input")).toHaveLength(1);
  // });

  it('Leading icon defaults to false', () => {
    const { container } = render(<Input icon={{ name: 'desktop' }} />);
    expect(container.firstChild).toHaveClass('psm-input-trailing-icon');
  });
  it('Uses leading icon when leading is true', () => {
    const { container } = render(
      <Input icon={{ name: 'desktop', position: 'leading' }} />,
    );
    expect(container.firstChild).toHaveClass('psm-input-leading-icon');
  });

  it('Icon type: svg-desktop', () => {
    const { container } = render(
      <Input icon={{ name: 'svg-desktop', position: 'leading' }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass('psm-icon-svg-desktop');
  });
  it('Icon type: svg-one-on-one', () => {
    const { container } = render(
      <Input icon={{ name: 'svg-one-on-one', position: 'leading' }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-icon-svg-one-on-one',
    );
  });
  it('Icon type: svg-tail-down', () => {
    const { container } = render(
      <Input icon={{ name: 'svg-tail-down', position: 'leading' }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass(
      'psm-icon-svg-tail-down',
    );
  });
  it('Icon type: svg-send', () => {
    const { container } = render(
      <Input icon={{ name: 'svg-send', position: 'leading' }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass('psm-icon-svg-send');
  });
  it('Icon type: svg-goal', () => {
    const { container } = render(
      <Input icon={{ name: 'svg-goal', position: 'leading' }} />,
    );
    expect(container.firstChild.firstChild).toHaveClass('psm-icon-svg-goal');
  });
});
