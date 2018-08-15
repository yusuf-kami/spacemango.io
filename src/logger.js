const logger = require('express-pino-logger')({
  name: 'Scroogey UI',
  prettyPrint: true,
})

export default logger