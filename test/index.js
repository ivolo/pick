
var pick = require('..');
var assert = require('assert');

describe('pick', function () {
  it('should pick a key', function () {
    assert.deepEqual(pick({a:1}, 'a'), {a:1});
  });

  it('should pick multiple keys', function () {
    assert.deepEqual(pick({a:1,b:2}, 'a', 'b'), {a:1, b:2});
  });

  it('should pick another key', function () {
    assert.deepEqual(pick({a:1,b:2}, 'b'), {b:2});
  });

  it('should allow pick from an array', function () {
    assert.deepEqual(pick([], 'a', 'b'), {});
  });

  it('should allow pick from a number', function () {
    assert.deepEqual(pick(1, 'a', 'b'), {});
  });

  it('should allow pick from null', function () {
    assert.deepEqual(pick(null, 'a', 'b'), {});
  });

  it('should allow pick from undefined', function () {
    assert.deepEqual(pick(undefined, 'a', 'b'), {});
  });
});