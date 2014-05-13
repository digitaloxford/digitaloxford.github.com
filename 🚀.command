#!/bin/bash

cd "$(dirname "$0")"

## TODO - put in checks for bundler, possibly installing


bundle install

bundle exec jekyll server --watch &
pid=$!

# wait a few seconds then open the browser
sleep 4
open http://0.0.0.0:4000

wait $pid
