import 'jsdom-global/register';
const { JSDOM } = require('jsdom');

const jsdom = new JSDOM(
  '<!doctype html><html><body></body></html>',
  { pretendToBeVisual: true },
  {
    features: { QuerySelector: true }
  }
);

const { window } = jsdom;
window.HTMLElement.prototype.scrollIntoView = () => {};
global.window = window;
global.document = window.document;
document.createRange = function createRange() {
  return {
    createContextualFragment(template) {
      return JSDOM.fragment(template);
    }
  };
};
global.navigator = {
  userAgent: 'node.js'
};
global.window.ga = function GA() {};
