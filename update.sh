#!/bin/bash

git add .
git commit -m "Update"
git checkout gh-pages
git merge master -m "Merge"
git push -u origin master
git push -u origin gh-pages
