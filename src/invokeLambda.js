const AWS = require('aws-sdk')
const Promise = require("bluebird");

exports.invoke = () => {
  return new Promise( (resolve, reject) => {
    const lambda = new AWS.Lambda({
      'apiVersion': '2015-03-31',
      'region' : 'ap-northeast-1',
      'invocation-type' : 'RequestResponse'
    })
    const params = {
      FunctionName:  process.env.invokeLambdaFunctionName || 'zs-lambda-dev-v2',
      InvocationType: 'RequestResponse',
      LogType: 'Tail',
      Payload: '{"key1":"value1", "key2":"value2", "key3":"value3"}'
    }
    lambda.invoke(params, (err, data) => {
      if (err) resolve(` Error :
            ${err}
        `)
      else resolve(`Success :
            StatusCode : ${data.StatusCode}
            Payload : ${data.Payload}
        `)
    })
  })
}
