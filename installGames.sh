#!/bin/bash

mkdir games
cd games

git clone git@github.com:nik0kin/mule-connectx connectx
(cd connectx/bundleCode && npm install)

git clone git@github.com:nik0kin/mule-tictactoe tictactoe
(cd tictactoe/bundleCode && npm install)

git clone git@github.com:nik0kin/mulesprawl mulesprawl
(cd mulesprawl/bundleCode && npm install)

git clone git@github.com:TheGamingProject/mule-backgammon backgammon
(cd backgammon/bundleCode && npm install)

git clone git@github.com:nik0kin/v vikings
cd vikings
npm install
bower install
broccoli build dist/
(cd bundleCode && npm install)
cd ..

cd ..
