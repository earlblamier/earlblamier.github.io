#!/bin/bash
# This script builds an Angular application and deploys it to the `docs` folder.
# earl-lamier to https://earlblamier.github.io/
# Build the Angular application
ng build --configuration production

# Copy the build output to the docs folder
cp -r docs/browser/* docs/

# Git commit and push changes
git add .
git commit -m "Deploy Angular 19 safely with copy"
git push origin main
