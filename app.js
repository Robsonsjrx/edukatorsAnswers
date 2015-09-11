var requireDir = require('require-dir')

app = require('./server/expressServer')

require('./server/routes')(app)

functions = requireDir('./server/functions')