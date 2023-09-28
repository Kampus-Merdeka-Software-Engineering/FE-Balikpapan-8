const express = require('express')
const productsRoutes = express.Router()

productsRoutes.get("/", (req, res) => {
  res.sendFile('products.html', { root: '/views/products.html' })
})

module.exports = { productsRoutes }