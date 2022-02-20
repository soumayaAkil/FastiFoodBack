const express = require('express')
const router = express.Router()
const UniteController=require("../Controllers/uniteController");
router.get('/GetAllUnites', UniteController.findAll);
router.get('/GetUnitByIdCat/:id_cat', UniteController.findUnitByIdCat);

module.exports=router;  