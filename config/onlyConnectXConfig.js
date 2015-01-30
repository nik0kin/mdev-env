var path = require('path');

var connect4 = require('./autoCreate/connect4');

module.exports = {
  minimumGameRoundTimerCheck: 10, //seconds
  minimumAutoCreateGameTimerCheck: 30,
  ruleBundles: {
    'connectX': {
      codePath: path.resolve(__dirname + '../../games/connectx/bundleCode'),
      autoCreateGame: connect4
    }
  }
};
