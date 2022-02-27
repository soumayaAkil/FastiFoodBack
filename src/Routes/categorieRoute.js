const express = require('express')
const router = express.Router()
const CatController=require("../Controllers/categorieController");

router.get('/GetCatByIdRestau/:id_restau', CatController.findCatByIdRestau);
router.get('/images/:id_cat',CatController.Images);

module.exports=router;  