const express = require('express')
const router = express.Router()
const ComPController=require("../Controllers/produitscomController");
//detailles par id com
router.get('/GetAllcommandesP/:id_com',ComPController.findAll);
router.get('/GetAllcommandesPweb/:id_com',ComPController.findAllweb);
module.exports=router; 