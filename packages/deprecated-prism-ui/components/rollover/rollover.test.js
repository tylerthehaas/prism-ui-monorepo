import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Rollover from './Rollover';

import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

const { mount } = Enzyme;

Enzyme.configure({ adapter: new Adapter() });

describe('<Rollover />', () => {
  it('Defaults to show above text', () => {
    const { container } = render(<Rollover />);
    expect(container.firstChild.firstChild.lastChild.firstChild).toHaveClass(
      'psm-rollover__window--hide psm-rollover__window--up',
    );
  });
  it('Rollover shown above text when down is false', () => {
    const { container } = render(<Rollover position={'down'} />);
    expect(container.firstChild.firstChild.lastChild.firstChild).toHaveClass(
      'psm-rollover__window--hide psm-rollover__window--down',
    );
  });
  it('Dotted underline when dotted underline is true', () => {
    const { container } = render(<Rollover dotted={true} down={false} />);
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'psm-rollover psm-rollover__text psm-rollover__text-dotted',
    );
  });
  it('Solid underline when solid underline is true', () => {
    const { container } = render(
      <Rollover dotted={false} down={false} underline={true} />,
    );
    expect(container.firstChild.firstChild.firstChild).toHaveClass(
      'psm-rollover psm-rollover__text psm-rollover__text-underline',
    );
  });
  it('No underline when no underline is picked', () => {
    const { container } = render(
      <Rollover dotted={false} down={false} underline={false} />,
    );
    expect(container.firstChild.firstChild.firstChild).not.toHaveClass(
      'psm-rollover',
    );
  });
  it('Display more when there are more to show than should be shown', () => {
    const container = mount(<Rollover numShown={2} underline={false} />);
    expect(container.find('.psm-rollover__footer')).toHaveLength(1);
  });
  it('Shows more when more is clicked', () => {
    const container = mount(<Rollover numShown={2} underline={false} />);
    container.find('.psm-rollover__footer').simulate('click');
    expect(container.state('clicked')).toEqual(true);
    expect(container.state('extra')).not.toHaveLength(0);
  });
  it('OnBlur closes rollover', () => {
    const container = mount(
      <Rollover dotted={false} numShown={2} underline={false} />,
    );
    container.find('.psm-rollover').simulate('blur');
    expect(container.state('hovered')).toEqual(false);
    expect(container.state('clicked')).toEqual(false);
  });
  it('OnMouseEnter opens rollover', () => {
    const container = mount(
      <Rollover dotted={false} numShown={2} underline={false} />,
    );
    container.find('.psm-rollover').simulate('mouseenter');
    expect(container.state('hovered')).toEqual(true);
  });
});
