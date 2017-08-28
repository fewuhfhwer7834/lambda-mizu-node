#!/bin/sh

aws lambda invoke \
--invocation-type RequestResponse \
--function-name zs-lambda-mizu \
--region ap-northeast-1 \
--log-type Tail \
--payload '{"key1":"value1", "key2":"value2", "key3":"value3"}' \
outputfile.txt
