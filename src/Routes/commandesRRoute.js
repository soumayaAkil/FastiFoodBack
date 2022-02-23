const express = require('express')
const router = express.Router()
const ComRController=require("../Controllers/commandesRController");
router.get('/GetAllcommandesR/:id_fact',ComRController.findAll);
module.exports=router; 