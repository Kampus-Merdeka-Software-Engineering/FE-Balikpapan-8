const express = require('express')
const detailProductRoutes = express.Router()

detailProductRoutes.get("/", (req, res) => {
  res.sendFile('detail-products.html', { root: '/views/detail-products.html' })
})

module.exports = { detailProductRoutes }