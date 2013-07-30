/**
 * Node Maestro Unit Tests
 */

/**
 * Module dependencies
 */

var should = require('should'),
    Maestro = require('../');

/**
 * Tests
 */

describe('Maestro', function () {

  describe('.version', function () {

    it('should match the format x.x.x', function (done) {
      Maestro.version.should.match(/^\d+\.\d+\.\d+$/);
      done();
    });

  });

  describe('module', function () {

    it('should be a function', function (done) {
      Maestro.should.be.a.function;
      done();
    });

  });

});