const express = require('express')
const router = express.Router()
const CatController=require("../Controllers/categorieController");
router.get('/GetAllCategories', CatController.findAll);
router.get('/GetCatByIdRestau/:id_restau', CatController.findCatByIdRestau);

module.exports=router;  