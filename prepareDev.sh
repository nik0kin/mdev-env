#!/bin/bash

mkdir -p node_modules
cd node_modules
rm -rf mule/ || echo "ok"
git clone git@github.com:nik0kin/mule

cd mule
npm install
grunt updateMule

cd ../..
