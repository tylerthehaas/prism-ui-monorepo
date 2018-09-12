import { JSDOM } from "jsdom";

global.document = new JSDOM("");
global.window = document.defaultView;
Object.keys(document.defaultView).forEach(property => {
  if (typeof global[property] === "undefined") {
    global[property] = document.defaultView[property];
  }
});

const createElement = global.document.createElement.bind(global.document);

global.document.createElement = elementName => {
  if (elementName === "canvas") {
    return {
      getContext: () => ({
        measureText: () => 30,
      }),
    };
  }
  return createElement(elementName);
};

global.navigator = {
  userAgent: "node.js",
};
