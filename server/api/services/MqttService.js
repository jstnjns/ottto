var mosca = require('mosca'),
    server = new mosca.Server({
      port: 1883,
      backend: {
        type: 'mongo',
        url: 'mongodb://localhost:27017/mqtt',
        pubsubCollection: 'ascoltatori',
        mongo: {},
      }
    });

module.exports = server;
