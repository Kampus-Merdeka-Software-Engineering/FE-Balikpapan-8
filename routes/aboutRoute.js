const express = require('express')
const aboutRoutes = express.Router()

aboutRoutes.get("/", (req, res) => {
  res.sendFile('about.html', { root: '/views/about.html' })
})

module.exports = { aboutRoutes }
