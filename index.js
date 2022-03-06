const express = require('express');
const bodyParser = require('body-parser');

const Produit= require("./src/Models/produitModel")
const Detailprod= require("./src/Models/detailProdModel")

const categorieRoute = require("./src/Routes/categorieRoute");
const clientRoute = require("./src/Routes/clientRoute");
const comRoute = require("./src/Routes/commandeRoute");
const detailcomRoute = require("./src/Routes/detailcomController");
const detailprodRoute = require("./src/Routes/detailprodRoute");
const payelineRoute = require("./src/Routes/payelineController");
const produitRoute = require("./src/Routes/produitRoute");
const restauRoute = require("./src/Routes/restaurantRoute");
const uniteRoute = require("./src/Routes/uniteRoute");
const factRoute = require("./src/Routes/facteurRoute");
const cour = require("./src/Routes/coursierRoute");

var multer, storage, path, crypto;
multer = require('multer')
path = require('path');
crypto = require('crypto')

const factRoutee = require("./src/Routes/FacComRoute");
const comR = require("./src/Routes/commandesRRoute");
const comP = require("./src/Routes/produitscomRoute");

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
app.use(cors({origin:"http://localhost:8081"}));

app.use('/categoie',categorieRoute);
app.use('/produit',produitRoute);
app.use('/unite',uniteRoute);
app.use('/client',clientRoute);
app.use('/commande',comRoute);
app.use('/detailCommande',detailcomRoute);
app.use("/detailProduit",detailprodRoute);
app.use("/payeline",payelineRoute);
app.use("/restaurant",restauRoute);
app.use('/facteur',factRoute);
app.use("/facture",factRoutee);
app.use("/commandesR",comR);
app.use("/commandesP",comP);
app.use("/coursier",cour);

app.use('/uploads',express.static('images'));


// pictureeeee
var form = "<!DOCTYPE HTML><html><body>" +
"<form method='post' action='/upload' enctype='multipart/form-data'>" +
"<input type='file' name='upload'/>" +
"<input type='submit' /></form>" +
"</body></html>";

app.get('/', function (req, res){
  res.writeHead(200, {'Content-Type': 'text/html' });
  res.end(form);

});



// Include the node file module
var fs = require('fs');

storage = multer.diskStorage({
    destination: './images/',
    filename: function(req, file, cb) {
      return crypto.pseudoRandomBytes(16, function(err, raw) {
        if (err) {
          return cb(err);
        }
        return cb(null, "" + (raw.toString('hex')) + (path.extname(file.originalname)));
      });
    }
  });


// Post files
app.post(
  "/upload",
  multer({
    storage: storage
  }).single('upload'), function(req, res) {
    console.log(req.file);
    console.log(req.body);
    res.redirect("/images/" + req.file.filename);
    console.log(req.file.filename);
    return res.status(200).end();
    
  });

app.get('/images/:upload', function (req, res){
  file = req.params.upload;
  console.log(req.params.upload);
  var img = fs.readFileSync(__dirname + "/images/" + file);
  res.writeHead(200, {'Content-Type': 'image/png' });
  res.end(img, 'binary');

});





// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

