const express = require('express')
const router = express.Router()
const ComController=require("../Controllers/commandeController");

router.post('/putReponse',ComController.putrep);
router.post('/AnnulerCom',ComController.anulerCom);
router.get('/GetAllCommandesByClRep', ComController.findAllbyIdClRep);
router.get('/GetAllCommandesByIdFact/:id_fact', ComController.findAllbyIdFact);
router.get('/GetAllCommandesByIdRestau/:id_restau', ComController.findAllbyIdRestau);
router.get('/GetCommandesAcceptByIdRestau/:id_restau', ComController.findbyidRestauAccept);
router.get('/GetCommandesRefuseByIdRestau/:id_restau', ComController.findbyidRestauRefuse);
router.post('/putReponse',ComController.putrep);

module.exports=router;  
//router.get('/GetAllCommandesByIdRestau/:id_restau', ComController.anulerCom);