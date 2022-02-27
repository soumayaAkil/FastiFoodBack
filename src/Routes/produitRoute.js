const express = require('express')
const router = express.Router()
const ProduitController=require("../Controllers/produitController");
router.get('/GetAllProduits', ProduitController.findAll);
router.get('/GetAllRepas', ProduitController.findAllRepas);
router.get('/GetAllBoissons', ProduitController.findAllBoissons);
router.get('/GetAllDesserts', ProduitController.findAllDesserts);
router.get('/images/:id_prod',ProduitController.Images);
router.post('/postProd',ProduitController.post);
module.exports=router;  


/*
const express = require('express');
const { body } = require('express-validator'); 
const prodController = require('../controllers/produit');
const routerP = express.Router();
routerP.get('/', prodController.getAllproduits);
routerP.post('/min', prodController.getPord);
routerP.get('/images',prodController.Images);
module.exports = routerP;
*/