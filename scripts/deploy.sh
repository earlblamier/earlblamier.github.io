#!/bin/bash
# USE git bash to run this script
# This script builds an Angular application and deploys it to the `docs` folder.
# earl-lamier to https://earlblamier.github.io/
# Build the Angular application
# ng build --configuration production

# Enable extended globbing
shopt -s extglob

# Remove all files and folders in the docs directory except CNAME
rm -rf docs/!(CNAME)

ng build

# Copy the build output to the docs folder
cp -r docs/browser/* docs/

# Check if CNAME file exists, if not, create it and write "earl-lamier.dev"
if [ ! -f docs/CNAME ]; then
  echo "earl-lamier.dev" > docs/CNAME
  echo "CNAME file created with 'earl-lamier.dev'"
else
  echo "CNAME file already exists"
fi

# Git commit and push changes
git add .
git commit -m "Deploy Angular 19 clear local docs and copy safely"
git push origin main
