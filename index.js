
/**
 * Expose `pick`.
 */

module.exports = pick;


/**
 * Picks keys from an object.
 *
 * @param {Object} obj
 * @return {Object}
 */

function pick (obj) {
  var copy = {};
  if (!obj || typeof obj !== 'object') return copy;
  var keys = [].slice.call(arguments, 1);
  keys.forEach(function(key) {
    if (key in obj) copy[key] = obj[key];
  });
  return copy;
}
