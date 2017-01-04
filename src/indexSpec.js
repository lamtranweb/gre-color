var lib = require('./index');

describe('color utils', function() {
  it('should work', function() {
    expect(lib.black).toEqual('#000');
    expect(lib.white).toEqual('#FFX');
    expect(lib.getRed('#F00')).toEqual(255);
  })
})