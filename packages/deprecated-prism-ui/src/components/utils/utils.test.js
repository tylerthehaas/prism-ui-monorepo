import * as assert from 'assert';
import emptyElement, {
  getFirstElementChild,
  simplifyWhiteSpace,
  isBoolean,
  isObject,
  removeAllHtml,
  removeScriptTags,
  customizeNames,
  findPreviewType,
  findMultiplePreviewTypes
} from './utils';

describe('emptyElement', () => {
  it('must empty an element', () => {
    document.body.innerHTML = '<div></div><div></div>';
    assert.equal(2, document.body.children.length);
    emptyElement(document.body);
    assert.equal(0, document.body.children.length);
  });
});

describe('getFirstElementChild', () => {
  it('must return the first element child of an element', () => {
    document.body.innerHTML = 'hello world<div id="firstChild"></div><div></div>';
    const firstElementChild = getFirstElementChild(document.body);
    assert.equal('firstChild', firstElementChild.getAttribute('id'));
  });
  it('must return null', () => {
    document.body.innerHTML = 'hello world';
    const firstElementChild = getFirstElementChild(document.body);
    assert.equal(null, firstElementChild);
  });
});

describe('simplifyWhiteSpace', () => {
  it('must remove all new line, spaces from a string', () => {
    const text = `
      <div>
        hello world
      </div>
    `;
    const textReturn = '<div>helloworld</div>';
    assert.equal(textReturn, simplifyWhiteSpace(text));
  });
});

describe('isBoolean', () => {
  it('must return if its a boolean or not', () => {
    assert.equal(true, isBoolean(true));
    assert.equal(true, isBoolean(false));
    assert.equal(true, isBoolean(new Boolean())); // eslint-disable-line no-new-wrappers
    assert.equal(true, isBoolean(new Boolean(true))); // eslint-disable-line no-new-wrappers
    assert.equal(false, isBoolean(1));
    assert.equal(false, isBoolean(''));
    assert.equal(false, isBoolean({}));
  });
});

describe('isObject', () => {
  it('must return true if the given object is an object', () => {
    assert.equal(true, isObject({}));
  });

  it('must return false if the given object is not an object', () => {
    assert.equal(false, isObject(''));
  });
});

describe('removeAllHtml', () => {
  it('must return html without tags if links are not allowed', () => {
    const text = '<script>asdf</script>';
    assert.equal('asdf', removeAllHtml(text, false));
  });

  it('must return html without tags except anchor if links are allowed', () => {
    const linkText = '<script>asdf<a href="df" target="_blank"></a></script>';
    assert.equal('asdf<a href="df" target="_blank" rel="noopener noreferrer"></a>', removeAllHtml(linkText, true));
  });

  it('should return empty string if data is not there', () => {
    assert.equal('', removeAllHtml('', false));
  });
});

describe('removeScriptTags', () => {
  it('must remove open script tag', () => {
    const html = '<b>asdf<script type="text/javascript"></b>';
    assert.equal('<b>asdf type="text/javascript"></b>', removeScriptTags(html));
  });

  it('must remove javascript: in html', () => {
    const html = '<a href="javascript: void(0)">asdf</a>';
    assert.equal('<a href=" void(0)">asdf</a>', removeScriptTags(html));
  });
});

describe('customzeNames', () => {
  it('should return full name if there is only 1 recipient', () => {
    const mockData = [{ fullName: 'test' }];
    assert.equal('test', customizeNames(mockData));
  });

  it('should return both full names when there are 2 recipients', () => {
    const mockData = [{ fullName: 'test1' }, { fullName: 'test2' }];
    assert.equal('test1 and test2', customizeNames(mockData));
  });

  it('should return first recipient\'s name and number others', () => {
    const mockData = [{ fullName: 'test1' }, { fullName: 'test2' }, { fullName: 'test3' }];
    assert.equal('test1 and 2 others', customizeNames(mockData));
  });

  describe('findPreviewType', () => {
    it('should return the first instance of a given file type in an array of urls', () => {
      const urls = [
        'http://example.com/pic1.gif',
        'http://example.com/pic2.jpg',
        'http://example.com/pic3.png.jpg',
        'http://example.com/pic4.png',
        'http://example.com/pic5.png',
        'http://example.com/pic6.gif'
      ];

      assert.equal(findPreviewType(urls, 'png'), 'http://example.com/pic4.png');
    });
  });

  describe('findMultiplePreviewTypes', () => {
    it('should return the first instance of the first file type found in an array of urls', () => {
      const urls = [
        'http://example.com/pic1.gif',
        'http://example.com/pic2.jpg',
        'http://example.com/pic3.png.jpg',
        'http://example.com/pic4.png',
        'http://example.com/pic5.png',
        'http://example.com/pic6.gif'
      ];

      const types = ['mov', 'png', 'jpg', 'gif'];

      assert.equal(findMultiplePreviewTypes(urls, types), 'http://example.com/pic4.png');
    });
  });

});
