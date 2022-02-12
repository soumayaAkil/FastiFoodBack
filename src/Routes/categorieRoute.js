const express = require('express')
const router = express.Router()
const CatController=require("../Controllers/categorieController");
router.get('/GetAllCategories', CatController.findAll);

module.exports=router;  