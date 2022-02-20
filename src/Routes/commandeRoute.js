const express = require('express')
const router = express.Router()
const ComController=require("../Controllers/commandeController");
router.get('/GetAllCommandesByClRep', ComController.findAllbyIdClRep);
router.get('/GetAllCommandesByIdFact', ComController.findAllbyIdFact);
router.put('/putReponse',ComController.putrep);
module.exports=router;  