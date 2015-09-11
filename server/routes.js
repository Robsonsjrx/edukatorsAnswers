var requireDir = require('require-dir')

module.exports = function(app){

  app.get('/', function(req, res){
    console.log("hell yeahh")
    res.render('../src/html/index.html')
  })

}
