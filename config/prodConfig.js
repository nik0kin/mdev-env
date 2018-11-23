var path = require('path');

var muleConfig = require('./allMuleGamesConfig');

var devConfig = {
  http: {
    routesPrefix: '/webservices',
    serveStaticFolders: {
      '/static/vikings': path.join(__dirname, '../games', 'vikings/dist'),
      '/static/backgammon': path.join(__dirname, '../games', 'backgammon/src'),
      '/static/battleship': path.join(__dirname, '../games', 'battleship/dist/frontend'),
      '/static/connectx': path.join(__dirname, '../games', 'connectx/src'),
      '/static/lords-of-sprawlville': path.join(__dirname, '../games/lords-of-sprawlville', 'dist/frontend'),
      '/static/mulesprawl': path.join(__dirname, '../games', 'mulesprawl/src'),
      '/static/tictactoe': path.join(__dirname, '../games', 'tictactoe/src')
    },
    port: 3130
  },
  database: {
    db: 'mongodb://localhost/mule_prod',
  },
  mule: muleConfig,

  logLevel: 4, // Verbose
  logsPath:  path.normalize(__dirname + '/../logs')
};

module.exports = devConfig;
