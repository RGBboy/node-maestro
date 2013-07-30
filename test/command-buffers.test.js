/**
 * Command Buffer Unit Tests
 */

/**
 * Module dependencies
 */

var should = require('should'),
    CommandBuffers = require('../lib/command-buffers');

/**
 * Tests
 */

describe('CommandBuffers', function () {

  describe('.setTargetBuffer', function () {

    it('should be a function', function (done) {
      CommandBuffers.setTargetBuffer.should.be.a.function;
      done();
    });

    it('should return a Buffer', function (done) {
      CommandBuffers.setTargetBuffer(6000, 0).should.be.an.instanceof(Buffer);
      done();
    });

    it('should return a valid Set Target Buffer', function (done) {
      var buffer = CommandBuffers.setTargetBuffer(6000, 2);
      buffer[0].should.equal(0x84);
      buffer[1].should.equal(0x02);
      buffer[2].should.equal(0x70);
      buffer[3].should.equal(0x2E);
      done();
    });

    it('should throw when passed an invalid value', function (done) {
      
      (function () {
        CommandBuffers.setTargetBuffer(-1, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setTargetBuffer(16384, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setTargetBuffer(6000.5, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setTargetBuffer(undefined, 0);
      }).should.throw();

      done();
    });

    it('should throw when passed an invalid channel', function (done) {

      (function () {
        CommandBuffers.setTargetBuffer(6000, -1);
      }).should.throw();

      (function () {
        CommandBuffers.setTargetBuffer(6000, 128);
      }).should.throw();

      (function () {
        CommandBuffers.setTargetBuffer(6000, 64.5);
      }).should.throw();

      (function () {
        CommandBuffers.setTargetBuffer(6000, undefined);
      }).should.throw();

      done();
    });

  });

  describe('.setSpeedBuffer', function () {

    it('should be a function', function (done) {
      CommandBuffers.setSpeedBuffer.should.be.a.function;
      done();
    });

    it('should return a Buffer', function (done) {
      CommandBuffers.setSpeedBuffer(6000, 0).should.be.an.instanceof(Buffer);
      done();
    });

    it('should return a valid Set Speed Buffer', function (done) {
      var buffer = CommandBuffers.setSpeedBuffer(140, 5);
      buffer[0].should.equal(0x87);
      buffer[1].should.equal(0x05);
      buffer[2].should.equal(0x0C);
      buffer[3].should.equal(0x01);
      done();
    });

    it('should throw when passed an invalid value', function (done) {
      
      (function () {
        CommandBuffers.setSpeedBuffer(-1, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setSpeedBuffer(16384, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setSpeedBuffer(6000.5, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setSpeedBuffer(undefined, 0);
      }).should.throw();

      done();
    });

    it('should throw when passed an invalid channel', function (done) {

      (function () {
        CommandBuffers.setSpeedBuffer(6000, -1);
      }).should.throw();

      (function () {
        CommandBuffers.setSpeedBuffer(6000, 128);
      }).should.throw();

      (function () {
        CommandBuffers.setSpeedBuffer(6000, 64.5);
      }).should.throw();

      (function () {
        CommandBuffers.setSpeedBuffer(6000, undefined);
      }).should.throw();

      done();
    });

  });

  describe('.setAccelerationBuffer', function () {

    it('should be a function', function (done) {
      CommandBuffers.setAccelerationBuffer.should.be.a.function;
      done();
    });

    it('should return a Buffer', function (done) {
      CommandBuffers.setAccelerationBuffer(128, 0).should.be.an.instanceof(Buffer);
      done();
    });

    it('should return a valid Set Speed Buffer', function (done) {
      var buffer = CommandBuffers.setAccelerationBuffer(140, 4);
      buffer[0].should.equal(0x89);
      buffer[1].should.equal(0x04);
      buffer[2].should.equal(0x0C);
      buffer[3].should.equal(0x01);
      done();
    });

    it('should throw when passed an invalid value', function (done) {
      
      (function () {
        CommandBuffers.setAccelerationBuffer(-1, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setAccelerationBuffer(256, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setAccelerationBuffer(128.5, 0);
      }).should.throw();

      (function () {
        CommandBuffers.setAccelerationBuffer(undefined, 0);
      }).should.throw();

      done();
    });

    it('should throw when passed an invalid channel', function (done) {

      (function () {
        CommandBuffers.setAccelerationBuffer(6000, -1);
      }).should.throw();

      (function () {
        CommandBuffers.setAccelerationBuffer(6000, 128);
      }).should.throw();

      (function () {
        CommandBuffers.setAccelerationBuffer(6000, 64.5);
      }).should.throw();

      (function () {
        CommandBuffers.setAccelerationBuffer(6000, undefined);
      }).should.throw();

      done();
    });

  });

  describe('.getPositionBuffer', function () {

    it('should be a function', function (done) {
      CommandBuffers.getPositionBuffer.should.be.a.function;
      done();
    });

    it('should return a Buffer', function (done) {
      CommandBuffers.getPositionBuffer(0).should.be.an.instanceof(Buffer);
      done();
    });

    it('should return a valid Set Speed Buffer', function (done) {
      var buffer = CommandBuffers.getPositionBuffer(4);
      buffer[0].should.equal(0x90);
      buffer[1].should.equal(0x04);
      done();
    });

    it('should throw when passed an invalid channel', function (done) {

      (function () {
        CommandBuffers.getPositionBuffer(-1);
      }).should.throw();

      (function () {
        CommandBuffers.getPositionBuffer(128);
      }).should.throw();

      (function () {
        CommandBuffers.getPositionBuffer(64.5);
      }).should.throw();

      (function () {
        CommandBuffers.getPositionBuffer(undefined);
      }).should.throw();

      done();
    });

  });

  describe('.getMovingStateBuffer', function () {

    it('should be a function', function (done) {
      CommandBuffers.getMovingStateBuffer.should.be.a.function;
      done();
    });

    it('should return a Buffer', function (done) {
      CommandBuffers.getMovingStateBuffer().should.be.an.instanceof(Buffer);
      done();
    });

    it('should return a valid Set Speed Buffer', function (done) {
      var buffer = CommandBuffers.getMovingStateBuffer();
      buffer[0].should.equal(0x93);
      done();
    });

  });

  describe('.getErrorsBuffer', function () {

    it('should be a function', function (done) {
      CommandBuffers.getErrorsBuffer.should.be.a.function;
      done();
    });

    it('should return a Buffer', function (done) {
      CommandBuffers.getErrorsBuffer().should.be.an.instanceof(Buffer);
      done();
    });

    it('should return a valid Set Speed Buffer', function (done) {
      var buffer = CommandBuffers.getErrorsBuffer();
      buffer[0].should.equal(0xA1);
      done();
    });

  });

});