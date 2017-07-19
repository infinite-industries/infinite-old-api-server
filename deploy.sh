#!/usr/bin/env bash

ROOT='/home/deploy/readon-widget-test'
USER='deploy'

SERVER=''
if [[ "production" = $1 ]]; then
  SERVER='widget.daf-demo.website'
elif [[ "staging" = $1 ]]; then
  SERVER='widget.daf-demo.website'
else
  echo Please specify environment to deploy to.
  echo Usage: ./deploy.sh environment
  echo Example: ./deploy.sh staging
  exit
fi

ssh $USER@$SERVER << EOF
  cd $ROOT
  echo 'Updating sources'
  git reset --hard HEAD
  git checkout master
  git pull origin master
  echo 'Installing npm packages'
  npm install
  echo 'Restarting'
  forever stop widget
  rm /home/$USER/.forever/widget.log
  forever start --uid widget index.js
  echo 'Done!'
EOF
