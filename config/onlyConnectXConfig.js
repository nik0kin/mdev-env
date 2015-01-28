var path = require('path');

var connect4 = require('./autoCreate/connect4');

module.exports = {
  minimumGameRoundTimerCheck: 10, //seconds
  minimumAutoCreateGameTimerCheck: 30,
  ruleBundles: {
    'connectX': {
      path: path.resolve('../games/connectx/bundleCode'),
      autoCreateGame: connect4
    }
  }
};
