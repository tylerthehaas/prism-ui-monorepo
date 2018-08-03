import * as assert from 'assert';
import { Button } from '../../../dist/prism.min.js';
import { simplifyWhiteSpace } from '../utils/utils';

describe('Button Component', () => {
  let button;
  before(() => {
    document.body.innerHTML = '<div><button id="myButton"></button></div>';
    button = new Button('#myButton');
  });

  after(() => {
    document.body.innerHTML = '';
  });

  it('must have correct properties', () => {
    button.render({
      className: '123'
    });
    assert.ok(button.id.indexOf('button') !== -1);
    assert.equal('button', button.node.getAttribute('type'));
    assert.equal(false, button.isSubmitButton);
    assert.equal(false, button.isDisabled);
    assert.equal('', simplifyWhiteSpace(button.title));
    assert.equal('function', typeof button.onClick);
    assert.equal(true, button.node.className.indexOf('123') > -1);
    assert.equal('123', button.className);
  });

  it('must trigger the callback function on click', () => {
    let increment = 0;
    button.render({
      onClick: () => {
        increment += 1;
      }
    });
    button.node.click();
    assert.equal(1, increment);
  });

  it('must be disabled', () => {
    button.render({ isDisabled: true });
    assert.equal(true, button.node.hasAttribute('disabled'));
  });

  it('must be a submit button', () => {
    button.render({ isSubmitButton: true });
    assert.equal('submit', button.node.getAttribute('type'));
  });

  it('must set the loading state of the button', () => {
    assert.equal(button.node.getAttribute('aria-busy'), 'false');
    button.isLoading = true;
    assert.equal(button.node.getAttribute('aria-busy'), 'true');
    assert.equal(button.props.isLoading, true);
  });

  it('must remove primary button styles when isPrimary is set to false', () => {
    let hasPrimaryClass = true;
    button.isPrimary = false;
    button.node.classList.forEach(c => {
      if(!/^buttonPrimary/.test(c)){
        hasPrimaryClass = false;
      }
    });
    assert.ok(!hasPrimaryClass);
  });

  it('must add primary button styles when isPrimary is set to true', () => {
    let hasPrimaryClass = false;
    button.isPrimary = true;
    button.node.classList.forEach(c => {
      if(/^buttonPrimary/.test(c)){
        hasPrimaryClass = true;
      }
    });
    assert.ok(hasPrimaryClass);
  });
});

describe('Button Component', () => {
  before(() => {
    document.body.innerHTML = '<div><button id="myButton"></button></div>';
  });
  after(() => {
    document.body.innerHTML = '';
  });
  it('will do console.error', () => {
    const button = new Button('#askjddjk');
    assert.equal(undefined, button.node);
  });
});
