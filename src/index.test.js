var lib = require('./index');
var expect = require('chai').expect;

describe('color utils', () => {
  it('black', function() {
    expect(lib.black).to.equal('#000');
  })

  it('white', function() {
    expect(lib.white).to.equal('#FFF');
  })

  it('rgba', function() {
    expect(lib.rgba('#FFF', 0.2)).to.equal('rgba(255, 255, 255, 0.2)');
  })

  it('gets red', function() {
    expect(lib.getRed('#F00')).to.equal(255);
    expect(lib.getRed('#0F0')).to.equal(0);
  })

  it('gets green', function() {
    expect(lib.getGreen('#0F0')).to.equal(255);
    expect(lib.getGreen('#F00')).to.equal(0);
  })

  it('gets blue', function() {
    expect(lib.getBlue('#0FF')).to.equal(255);
    expect(lib.getBlue('#F00')).to.equal(0);
  })

  it('luminance', function() {
    expect(lib.luminance('#F00')).to.equal(0.2126);
  })

  it('contrast', function() {
    expect(lib.contrast('#F00', '#00F')).to.equal(2.148936170212766);
  })

  it('light', function() {
    expect(lib.lightOrDark('#F00')).to.equal('light');
  })

  it('dark', function() {
    expect(lib.lightOrDark('#FFF')).to.equal('dark');
  })
})