const InvokeLambda = require('./src/invokeLambda.js')

exports.handler = function(event, context, callback) {
  results.then( (date) => {
    console.info(date)
    callback(null,date)
  }).catch( (err) => {
    console.error(err)
    callback(err,null)
  })
}
