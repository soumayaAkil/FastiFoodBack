const express = require('express')
const router = express.Router()
const ComController=require("../Controllers/commandeController");

router.post('/putReponse',ComController.putrep);
router.post('/AnnulerCom',ComController.anulerCom);
router.get('/GetAllCommandesByClRep', ComController.findAllbyIdClRep);
router.get('/GetAllCommandesByIdFact/:id_fact', ComController.findAllbyIdFact);
router.get('/GetAllCommandesByIdRestau/:id_restau', ComController.findAllbyIdRestau);

module.exports=router;  
//router.get('/GetAllCommandesByIdRestau/:id_restau', ComController.anulerCom);