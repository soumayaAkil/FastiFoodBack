const express = require('express')
const router = express.Router()
const UniteController=require("../Controllers/uniteController");
router.get('/GetAllUnites', UniteController.findAll);

module.exports=router;  