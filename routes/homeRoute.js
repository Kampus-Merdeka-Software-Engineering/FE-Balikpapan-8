const express = require('express')
const homeRoutes = express.Router()

homeRoutes.get("/", (req, res) => {
  res.sendFile('home.html', { root: './public/views' })
})

module.exports = { homeRoutes }