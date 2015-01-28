var connect4AutoCreateConfig = {
  name: 'connect4',
  maxPlayers: 2,
  turnProgressStyle: 'waitprogress', // also dont let them override it
  turnTimeLimit: 99999,
  ruleBundleGameSettings: {
    customBoardSettings: {
      connectAmount: 4,
      width: 7,
      height: 6
    }
  }
}

module.exports = connect4AutoCreateConfig;
