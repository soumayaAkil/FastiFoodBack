const express = require('express');
const bodyParser = require('body-parser');

const Detailprod= require("./src/Models/detailProdModel")

const categorieRoute = require("./src/Routes/categorieRoute");
const clientRoute = require("./src/Routes/clientRoute");
const comRoute = require("./src/Routes/commandeRoute");
const detailcomRoute = require("./src/Routes/detailcomController");
const detailprodRoute = require("./src/Routes/detailprodRoute");
const payelineRoute = require("./src/Routes/payelineController");

const restauRoute = require("./src/Routes/restaurantRoute");
const uniteRoute = require("./src/Routes/uniteRoute");
const factRoute = require("./src/Routes/facteurRoute");
const cour = require("./src/Routes/coursierRoute");
const promoRoute =  require("./src/Routes/promotionRoute");

const imageController = require("./src/Controllers/imageController")
const ReclamationRoute = require("./src/Routes/ReclamationRoute");

var multer, storage, path, crypto;
multer = require('multer')
path = require('path');
crypto = require('crypto')

const factRoutee = require("./src/Routes/FacComRoute");
const comR = require("./src/Routes/commandesRRoute");


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
app.use("/coursier",cour);
app.use("/promotion",promoRoute);
app.use("/Reclamations",ReclamationRoute);

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


const upload = multer({
  destination: './images/',
})

app.post("/upload",multer({  storage: storage }).single('upload'),imageController.postPicture);
app.post("/uploadLogo",multer({  storage: storage }).single('file'),imageController.postLogo);
//app.post("/uploadLogo",upload.single('file'),imageController.postLogo);

app.get('/images/:upload', function (req, res){
  file = req.params.upload;
  console.log(req.params.upload);
  var img = fs.readFileSync(__dirname + "/images/" + file);
  res.writeHead(200, {'Content-Type': 'image/png' });
  res.end(img, 'binary');

});

app.post("/uploadPromo",multer({  storage: storage }).single('upload'),imageController.postPicturePromo);



 




// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

