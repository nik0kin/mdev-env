// Run mule server!

var mule = require('mule');

var config = require('./config/developConfig');

mule.initQ(config)
  .then(function () {
    console.log('MuleDev is Running!');
  });
