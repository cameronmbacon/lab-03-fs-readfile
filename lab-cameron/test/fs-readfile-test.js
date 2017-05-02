'use strict';

const chai = require('chai');
const expect = chai.expect;
const reader = require('../lib/fs-readfile');

let filePaths = [
  `${__dirname}/../data/first.txt`,
  `${__dirname}/../data/second.txt`,
  `${__dirname}/../data/third.txt`,
];

let testData = ['6669727374207465', '7365636f6e642074', '7468697264207465'];

describe('fs-readfile', function() {
  describe('#reader(\'first.txt\')', function() {
    it('should read first.txt and return an 8-byte hex string', function(done) {
      reader(filePaths, function(hexBuffers) {
        console.log('8 bytes of first.txt as a hex string', hexBuffers[0]);
        expect(typeof hexBuffers[0]).equal(typeof 'string');
        expect(hexBuffers[0]).to.equal(testData[0]);
        expect(hexBuffers).to.deep.equal(testData);
        done();
      });
    });
  });
  describe('#reader(\'second.txt\')', function() {
    it('should read second.txt and return an 8-byte hex string', function(done) {
      reader(filePaths, function(hexBuffers) {
        console.log('8 bytes of second.txt as a hex string', hexBuffers[1]);
        expect(typeof hexBuffers[1]).equal(typeof 'string');
        expect(hexBuffers[1]).to.equal(testData[1]);
        expect(hexBuffers).to.deep.equal(testData);
        done();
      });
    });
  });
  describe('#reader(\'third.txt\')', function() {
    it('should read third.txt and return an 8-byte hex string', function(done) {
      reader(filePaths, function(hexBuffers) {
        console.log('8 bytes of third.txt as a hex string', hexBuffers[2]);
        expect(typeof hexBuffers[2]).equal(typeof 'string');
        expect(hexBuffers[2]).to.equal(testData[2]);
        expect(hexBuffers).to.deep.equal(testData);
        done();
      });
    });
  });
});
