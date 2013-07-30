/**
 * Util Unit Tests
 */

/**
 * Module Dependencies
 */

var should = require('should'),
    util = require('../lib/util');

/**
 * Tests
 */

describe('util', function () {

  describe('.isUInt7', function () {

    it('should be a function', function (done) {
      util.isUInt7.should.be.a.function;
      done();
    });

    it('should return true for numbers that are Unsigned 7-bit Integers', function (done) {
      util.isUInt7(0).should.be.true;
      util.isUInt7(127).should.be.true;
      done();
    });

    it('should return false for numbers that are not Unsigned 7-bit Integers', function (done) {
      util.isUInt7(-1).should.be.false;
      util.isUInt7(128).should.be.false;
      util.isUInt7(64.5).should.be.false;
      done();
    });

  });

  describe('.isUInt8', function () {

    it('should be a function', function (done) {
      util.isUInt8.should.be.a.function;
      done();
    });

    it('should return true for numbers that are Unsigned 8-bit Integers', function (done) {
      util.isUInt8(0).should.be.true;
      util.isUInt8(255).should.be.true;
      done();
    });

    it('should return false for numbers that are not Unsigned 8-bit Integers', function (done) {
      util.isUInt8(-1).should.be.false;
      util.isUInt8(256).should.be.false;
      util.isUInt8(128.5).should.be.false;
      done();
    });

  });

  describe('.isUInt14', function () {

    it('should be a function', function (done) {
      util.isUInt14.should.be.a.function;
      done();
    });

    
    it('should return true for numbers that are Unsigned 14-bit Integers', function (done) {
      util.isUInt14(0).should.be.true;
      util.isUInt14(16383).should.be.true;
      done();
    });

    it('should return false for numbers that are not Unsigned 14-bit Integers', function (done) {
      util.isUInt14(-1).should.be.false;
      util.isUInt14(16384).should.be.false;
      util.isUInt14(8192.5).should.be.false;
      done();
    });

  });

});