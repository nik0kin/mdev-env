var path = require('path');

var muleConfig = require('./allMuleGamesConfig');

var devConfig = {
  http: {
    routesPrefix: '/webservices',
    serveStaticFolders: {
      '/static/backgammon': path.join(__dirname, '../games', 'backgammon/src'),
      '/static/connectx': path.join(__dirname, '../games', 'connectx/src'),
      '/static/mulesprawl': path.join(__dirname, '../games', 'mulesprawl/src'),
      '/static/tictactoe': path.join(__dirname, '../games', 'tictactoe/src')
    },
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
