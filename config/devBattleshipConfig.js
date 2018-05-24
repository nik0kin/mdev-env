var path = require('path');

var battleship = require('./autoCreate/standardBattleship');

var devPath = path.resolve(__dirname + '/../../mule-battleship/dist/bundleCode');
var prodPath = path.resolve(__dirname + '/../games/battleship/dist/bundleCode');

module.exports = {
  minimumGameRoundTimerCheck: 10, // seconds
  minimumAutoCreateGameTimerCheck: 30,
  ruleBundles: {
    'Battleship': {
      codePath: prodPath,
      autoCreateGame: battleship
    }
  }
};
