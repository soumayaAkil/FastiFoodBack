const express = require('express')
const router = express.Router()
const ComController=require("../Controllers/commandeController");
router.get('/GetAllCommandes', ComController.findAll);

module.exports=router;  