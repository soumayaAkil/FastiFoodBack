const express = require('express');
const bodyParser = require('body-parser');

const categorieRoute = require("./src/Routes/categorieRoute");
const clientRoute = require("./src/Routes/clientRoute");
const comRoute = require("./src/Routes/commandeRoute");
const detailcomRoute = require("./src/Routes/detailcomController");
const detailprodRoute = require("./src/Routes/detailprodController");
const payelineRoute = require("./src/Routes/payelineController");
const produitRoute = require("./src/Routes/produitController");
const restauRoute = require("./src/Routes/restaurantRoute");
const uniteRoute = require("./src/Routes/uniteRoute");

var dbConn= require('./Config/db')
// create express app
const app = express();
// Setup server port
const port = process.env.PORT || 5000;
var cors = require('cors')

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))
// parse requests of content-type - application/json
app.use(bodyParser.json())
// define a root route

app.use(express.json())
app.use(cors({origin:"http://localhost:4200"}));

app.use('/categoie',categorieRoute);
app.use('/produit',produitRoute);
app.use('/unite',uniteRoute);
app.use('/client',clientRoute);
app.use('/commande',comRoute);
app.use('/detailCommande',detailcomRoute);
app.use("/detailProduit",detailprodRoute);
app.use("/payeline",payelineRoute);
app.use("/restaurant",restauRoute);


app.use('/uploads',express.static('./images'));




// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});