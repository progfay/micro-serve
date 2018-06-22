const handler = require('serve-handler')

module.exports = async (request, response) => {
  await handler(request, response)
}
