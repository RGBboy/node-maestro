/*!
 * util
 */

/**
 * Module Dependencies
 */

// none yet!

/**
 * Module Exports
 */

exports = module.exports;

/**
 * isUInt7
 *
 * @param: {Number} value
 * @return: {Boolean}
 * @api: Private
 */
exports.isUInt7 = function (value) {

  return (Math.floor(value) === value &&
          value >= 0 &&
          value <= 127);

};

/**
 * isUInt8
 *
 * @param: {Number} value
 * @return: {Boolean}
 * @api: Private
 */
exports.isUInt8 = function (value) {

  return (Math.floor(value) === value &&
          value >= 0 &&
          value <= 255);

};

/**
 * isUInt14
 *
 * @param: {Number} value
 * @return: {Boolean}
 * @api: Private
 */
exports.isUInt14 = function (value) {

  return (Math.floor(value) === value &&
          value >= 0 &&
          value <= 16383);

};
