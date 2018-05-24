var path = require('path');

var devBattleshipConfig = require('./devBattleshipConfig');

module.exports = {
  minimumGameRoundTimerCheck: 10, //seconds
  minimumAutoCreateGameTimerCheck: 30,
  ruleBundles:
    {
      'vikings': {
        codePath: path.resolve(__dirname + '/../games/vikings/bundleCode'),
        autoCreateGame: [{
          name: 'Vikings for 2',
          maxPlayers: 2,
          turnProgressStyle: 'autoprogress',
          turnTimeLimit: 60, // 1 minute
          ruleBundleGameSettings: {customBoardSettings: {
            mapType: 'diamond',
            width: 30,
            height: 30
          }}
        }, {
          name: 'Vikings for 2 turtles',
          maxPlayers: 2,
          turnProgressStyle: 'autoprogress',
          turnTimeLimit: 60 * 60 * 1, // 1 hour
          ruleBundleGameSettings: {customBoardSettings: {
            mapType: 'diamond',
            width: 40,
            height: 40
          }}
        }, {
          name: 'single player 2min turn',
          maxPlayers: 1,
          turnProgressStyle: 'autoprogress',
          turnTimeLimit: 60 * 2, // 2 minutes
          ruleBundleGameSettings: {customBoardSettings: {
            mapType: 'diamond',
            width: 30,
            height: 30
          }}
        }, {
          name: 'single player twin mountains',
          maxPlayers: 1,
          turnProgressStyle: 'autoprogress',
          turnTimeLimit: 60 * 2, // 2 minutes
          ruleBundleGameSettings: {customBoardSettings: {
            mapName: 'twinmountains'
          }}
        }]
      },
      'BackGammon': {
        codePath: path.resolve(__dirname + '/../games/backgammon/bundleCode'),
        autoCreateGame: {
          name: 'HARDCORE BACKGAMMON 1v1',
          maxPlayers: 2, // TODO dont require putting properties for properties that are static via the rulebundle (must have 2 players in backgammon)
          turnProgressStyle: 'waitprogress', // also dont let them override it
          turnTimeLimit: 99999,
          ruleBundleGameSettings: {customBoardSettings: {}}
        }
      },
      'Battleship': devBattleshipConfig.ruleBundles.Battleship,
      'tictactoe': {
        codePath: path.resolve(__dirname + '/../games/tictactoe/bundleCode'),
        autoCreateGame: {
          name: 'TicTacToe4Tots',
          maxPlayers: 2, // TODO dont require putting properties for properties that are static via the rulebundle (must have 2 players in backgammon)
          turnProgressStyle: 'waitprogress', // also dont let them override it
          turnTimeLimit: 99999,
          ruleBundleGameSettings: {customBoardSettings: {}}
        }
      },
      'connectX': {
        codePath: path.resolve(__dirname + '/../games/connectx/bundleCode'),
        autoCreateGame: {
          name: 'connect4',
          maxPlayers: 2,
          turnProgressStyle: 'waitprogress', // also dont let them override it
          turnTimeLimit: 99999,
          ruleBundleGameSettings: {customBoardSettings: {
            connectAmount: 4,
            width: 7,
            height: 6
          }}
        }
      },
      'mulesprawl': {
        codePath: path.resolve(__dirname + '/../games/mulesprawl/bundleCode'),
        autoCreateGame: {
          name: 'auto mulesprawl game',
          maxPlayers: 1,
          turnProgressStyle: 'autoprogress',
          turnTimeLimit: 15,
          ruleBundleGameSettings: {customBoardSettings: { width: 32, height: 32 }}
        }
      }
    }
};
