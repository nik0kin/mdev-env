var path = require('path');

var muleConfig = require('./onlyConnectXConfig');

var devConfig = {
  http: {
    routesPrefix: '/webservices',
    port: 3130
  },
  database: {
    db: 'mongodb://localhost/mule_dev',
  },
  mule: muleConfig,

  logsPath:  path.normalize(__dirname + '/../logs')
};

module.exports = devConfig;
