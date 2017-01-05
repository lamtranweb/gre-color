var lib = require('./index');
var expect = require('chai').expect;

describe('color utils', () => {
  it('should work!', function() {
    expect(lib.black).to.equal('#000');
    expect(lib.white).to.equal('#FFF');
  })
})