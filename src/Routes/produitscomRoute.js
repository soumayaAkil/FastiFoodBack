const express = require('express')
const router = express.Router()
const ComPController=require("../Controllers/produitscomController");
//detailles par id com
router.get('/GetAllcommandesP/:id_com',ComPController.findAlll);
router.get('/GetAllcommandesPA/:id_com',ComPController.findAllA);
router.get('/GetAllcommandesPweb/:id_com',ComPController.findAllweb);
module.exports=router; 