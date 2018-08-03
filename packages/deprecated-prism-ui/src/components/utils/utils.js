const emptyElement = (node) => {
  let { firstChild } = node;
  while (firstChild) {
    node.removeChild(firstChild);
    ({ firstChild } = node);
  }
};

export const getFirstElementChild = (node) => {
  const childNodes = Array.prototype.slice.call(node.childNodes);
  for (let index = 0; index < childNodes.length; index += 1) {
    if (childNodes[index].nodeType === 1) {
      // 1 means its an element node
      return childNodes[index];
    }
  }
  return null;
};

export const simplifyWhiteSpace = (str) => str.replace(/(?:\r\n|\r|\n)/g, '').replace(/\s+/g, '');
export const isBoolean = (x) =>
  Object.prototype.toString.call(x).toLowerCase() === '[object boolean]';

export const isObject = (obj) =>
  Object.prototype.toString.call(obj).toLowerCase() === '[object object]';

export const removeAllHtml = (html, allowLinks) => {
  const tmp = document.createElement('DIV');
  let r = '';
  if (tmp) {
    tmp.innerHTML = html;
    r = tmp.textContent;
    r = r ? r.replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/javascript:/g, '').replace(/<img/g, '')
      .replace(/<style/g, '')
      .replace(/<script/g, '') : '';
    // Only trim if newlines are the only things in the text areas.
    if (r.trim() === '') { r = r.trim(); }
    if (allowLinks) {
      // This is a bad idea, but eCards must allow href's and a tags, we try and safely do it..
      r = r.replace('&lt;a href="', '<a href="')
        .replace('target="_blank"&gt;', 'target="_blank" rel="noopener noreferrer">')
        .replace('&lt;/a&gt;', '</a>');
    }
  }
  return r;
};

export const removeScriptTags = (html) => {
  let r = html;
  r = r ? r.replace(/javascript:/g, '').replace(/<script/g, '').replace(/<img/g, '') : '';
  return r;
};

// TODO: Modify this to work with translations
export const customizeNames = (recipients) => {
  if (!recipients || recipients.length === 0) return '';
  if (recipients.length === 1) return recipients[0].fullName;
  if (recipients.length === 2) return `${recipients[0].fullName} and ${recipients[1].fullName}`;
  return `${recipients[0].fullName} and ${recipients.length - 1} others`;
};

export const findPreviewType = (urls, type) => {
  for (let i = 0; i < urls.length; i++) {
    if (typeof urls[i] === 'string' && urls[i].indexOf(type) === (urls[i].length - type.length)) {
      return urls[i];
    }
  }
  return '';
};

export const findMultiplePreviewTypes = (urls, types) => {
  for (let i = 0; i < types.length; i++) {
    const url = findPreviewType(urls, types[i]);
    if (url !== '') {
      return url;
    }
  }
  return '';
};

export default emptyElement;
