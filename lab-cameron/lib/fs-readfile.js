'use strict';

const fs = require('fs');

module.exports = function(paths, callback) {
  let buffers = [];
  fs.readFile(paths[0], function(err, data) {
    if (err) throw err;
    buffers.push(data.toString('hex', 0, 8));

    fs.readFile(paths[1], function(err, data) {
      if (err) throw err;
      buffers.push(data.toString('hex', 0, 8));

      fs.readFile(paths[2],function(err, data) {
        if (err) throw err;
        buffers.push(data.toString('hex', 0, 8));

        if (callback) return callback(buffers);
      });
    });
  });
};
