var path = require('path');

var muleConfig = require('./allMuleGamesConfig');

var devConfig = {
  http: {
    routesPrefix: '/webservices',
    port: 3130
  },
  database: {
    db: 'mongodb://localhost/mule_dev',
  },
  mule: muleConfig,

  logLevel: 4, // Verbose
  logsPath:  path.normalize(__dirname + '/../logs')
};

module.exports = devConfig;
