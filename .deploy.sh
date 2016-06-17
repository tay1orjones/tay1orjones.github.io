#!/bin/bash

#########################
## @snugug is quite a rad fellow! https://github.com/Snugug/blog/blob/master/.deploy.sh
#########################
set -e # exit with nonzero exit code if anything fails

# Move to build folder and init it
cd .dist
git init

# Configure Git
git config user.name "Travis CI"
git config user.email "taylor.jones826@gmail.com"

# Commit all the things into the repo
git add .
git commit -m ":shipit: Deploy to GitHub Pages"

# Force push to gh-pages
git push --force "https://${GH_TOKEN}@${GH_REF}" master:gh-pages > /dev/null 2>&1
