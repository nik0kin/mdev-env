var path = require('path');

module.exports = {
  minimumGameRoundTimerCheck: 10, //seconds
  minimumAutoCreateGameTimerCheck: 30,
  ruleBundles: 
    {
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
