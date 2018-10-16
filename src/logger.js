const logger = require('express-pino-logger')({
  name: 'Spacemango',
  prettyPrint: true,
})

export default logger