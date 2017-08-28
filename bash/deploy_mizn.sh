#!/bin/sh

zip -r $PWD/dest/deploy.zip ./*
aws lambda update-function-code \
--function-name zs-lambda-mizu \
--zip-file fileb://$PWD/dest/deploy.zip
