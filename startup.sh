#!/bin/bash
# start

workdir=$(pwd)
echo "current dir: $workdir. Envars building react app: "

if [ $BUILDREACT == 'true' ]; then
  echo "running npm run build script... (building react app in /build)"
  npm run build
fi

echo "now running npm run start... (dev server)"
npm run start