#!/bin/bash

cd games

cd connectx
git pull
# run connectx update
(cd bundleCode && npm install)
cd ..

cd tictactoe
git pull
(cd bundleCode && npm install)
cd ..

cd mulesprawl
git pull
(cd bundleCode && npm install)
cd ..

cd backgammon
git pull
(cd bundleCode && npm install)
cd ..

cd vikings
git pull
npm install
bower install
./devsdk
rm -rf dist/; broccoli build dist/
(cd bundleCode && npm install)
cd ..

(cd battleship && git pull)

(cd lords-of-sprawlville && git pull) || echo "missing zion.tgp.io git access"

cd ..
