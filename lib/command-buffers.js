/*!
 * command-buffers
 *
 * Pololu Maestro Command Buffers using Compact Protocol
 * http://www.pololu.com/docs/0J40/5.e
 */

/**
 * Module Dependencies
 */

var util = require('./util');

/**
 * Module Exports
 */

exports = module.exports = {};

/**
 * setTargetBuffer
 *
 * @param: {UInt14} value, speed in 0.25µs
 * @param: {UInt7} channel
 * @return: {Buffer}
 */
exports.setTargetBuffer = function (value, channel) {

  if (!util.isUInt14(value)) {
    throw new Error('Value must be an unsigned 14 bit integer.');
  };

  if (!util.isUInt7(channel)) {
    throw new Error('Channel must be an unsigned 7 bit integer.');
  };

  // should check position and channel variables.

  return buffer = new Buffer([
    0x84,
    channel,
    (value & 0x7F),
    (value >> 7 & 0x7F)
  ]);
};

/**
 * setSpeedBuffer
 *
 * @param: {Number} value
 * @param: {Number} channel
 * @return: {Buffer}
 */
exports.setSpeedBuffer = function (value, channel) {

  if (!util.isUInt14(value)) {
    throw new Error('Value must be an unsigned 14 bit integer.');
  };

  if (!util.isUInt7(channel)) {
    throw new Error('Channel must be an unsigned 7 bit integer.');
  };

  return buffer = new Buffer([
    0x87,
    channel,
    (value & 0x7F),
    (value >> 7 & 0x7F)
  ]);

};

/**
 * setAccelerationBuffer
 *
 * @param: {Number} value
 * @param: {Number} channel
 * @return: {Buffer}
 */
exports.setAccelerationBuffer = function (value, channel) {

  if (!util.isUInt8(value)) {
    throw new Error('Value must be an unsigned 8 bit integer.');
  };

  if (!util.isUInt7(channel)) {
    throw new Error('Channel must be an unsigned 7 bit integer.');
  };

  return buffer = new Buffer([
    0x89,
    channel,
    (value & 0x7F),
    (value >> 7 & 0x7F)
  ]);

};

/**
 * getPositionBuffer
 *
 * @param: {Number} channel
 * @return: {Buffer}
 */
exports.getPositionBuffer = function (channel) {

  if (!util.isUInt7(channel)) {
    throw new Error('Channel must be an unsigned 7 bit integer.');
  };

  return buffer = new Buffer([
    0x90,
    channel
  ]);

};

/**
 * getMovingStateBuffer
 *
 * @return: {Buffer}
 */
exports.getMovingStateBuffer = function () {

  return buffer = new Buffer([
    0x93
  ]);

};

/**
 * getErrorsBuffer
 *
 * @return: {Buffer}
 */
exports.getErrorsBuffer = function () {

  return buffer = new Buffer([
    0xA1
  ]);

};