var path = require('path');

var bundleCodePath = path.resolve(__dirname + '/../games/lords-of-sprawlville/dist/bundleCode');
var getAutoGames = require(path.resolve(__dirname + '/../games/lords-of-sprawlville/mule-env/getConfig'));

module.exports = {
  codePath: bundleCodePath,
  autoCreateGame: getAutoGames()
};
