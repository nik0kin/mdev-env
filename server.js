// Run mule server!

let mule = require('mule');

let config;
if (process.env && process.env.prod) {
  console.log('Using Production Config')
  config = require('./config/prodConfig');
} else {
  config = require('./config/developConfig');
}

mule.initQ(config)
  .then(() => {
    console.log('MuleDev is Running!');
  });
