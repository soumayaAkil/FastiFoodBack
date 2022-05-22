const express = require('express')
const router = express.Router()
const ComPController=require("../Controllers/produitscomController");
router.get('/GetAllcommandesP/:id_com',ComPController.findAll);
router.get('/GetAllcommandesPA/:id_com',ComPController.findAllA);
module.exports=router; 