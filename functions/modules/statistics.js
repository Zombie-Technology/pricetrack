const {
  httpsFunctions
} = require('../utils')

module.exports = httpsFunctions.onRequest(async (req, res) => {
  let statistics = []
  res.json(statistics)
})