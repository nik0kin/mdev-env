#!/bin/bash

cd node_modules
rm -rf mule/ || echo "ok"
git clone git@github.com:nik0kin/mule

cd mule
npm install
grunt updateMule

cd ../..
