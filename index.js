const express = require('express');
const app = express();
const port = 3000;
app.use(express.static('./public'));
console.log(__dirname);

//Import Module Routes
const { homeRoutes } = require('./routes/homeRoute')
const { aboutRoutes } = require('./routes/aboutRoute')
const { productsRoutes } = require('./routes/productsRoute')
const { detailProductRoutes } = require('./routes/detail-productsRoute')


//Rute homepage
app.use("/", homeRoutes);

//Rute about
app.use("/about", aboutRoutes);

//Rute Products
app.use("/products", productsRoutes)

//Rute detail-products
app.use("/detailProducts", detailProductRoutes)


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
