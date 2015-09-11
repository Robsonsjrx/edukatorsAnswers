var express    = require('express')
var http       = require('http')
var bodyParser = require('body-parser')
var ejs        = require('ejs')
// var fs         = require('fs')

var env = {
  node: process.env.NODE_ENV || 'local',
  beanstalk: process.env.EB_ENV || 'local',
  port: process.env.PORT ? process.env.PORT : (process.env.porta || null)
}

// var revCertificates = {
//   key: fs.readFileSync(__dirname + '/certificates/key.pem'),
//   cert: fs.readFileSync(__dirname + '/certificates/cert.pem')
// }

var app = express()

var port = {}
if(env.port){
  port = {
    http: env.port
  }
  app.listen(env.port)
}
else{
  port = {
    http: 3000,
    // https: 3333
  }

  http.createServer(app).listen(port.http)
  // https.createServer(revCertificates, app).listen(port.https)
}

app.engine('.html', ejs.renderFile)

console.log(port)

// app.use(express.static('./staticDir'))

app.use(bodyParser.json({
  extended: true,
  parameterLimit: 100000,
  limit: 1024 * 1024 * 100
}))

module.exports = app