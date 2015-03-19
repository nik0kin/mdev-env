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
rm -rf dist/; broccoli build dist/
(cd bundleCode && npm install)
cd ..

cd ..
