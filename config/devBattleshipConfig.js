var path = require('path');

var battleship = require('./autoCreate/standardBattleship');

module.exports = {
  minimumGameRoundTimerCheck: 10, // seconds
  minimumAutoCreateGameTimerCheck: 30,
  ruleBundles: {
    'Battleship': {
      codePath: path.resolve(__dirname + '/../../../dev/mule-battleship/dist/bundleCode'),
      autoCreateGame: battleship
    }
  }
};
