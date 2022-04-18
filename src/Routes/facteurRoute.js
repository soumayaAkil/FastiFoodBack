const express = require('express')
const router = express.Router()
const FactController=require("../Controllers/facteurController");
router.get('/GetAllFacteursByIdClient/:id_client', FactController.findAllbyIdClient);
router.get('/GetAllFacteursByIdFact', FactController.findAllbyIdFact);
router.put('/annulerFacteur',FactController.annulerFact);
//Facture etat accepte
router.get('/GetFacturesAccepte/:id_client',FactController.findAllbyIdClientAccepte);
//Facture etat partiel
router.get('/GetFacturesPartiel/:id_client',FactController.findAllbyIdClientpartiel);
//Facture etat refuse
router.get('/GetFacturesRefuse/:id_client',FactController.findAllbyIdClientrefuse);
//Facture aujourd'hui
router.get('/GetFacturesJ/:id_client',FactController.findAllbyIdClientJ);
//by date
router.get('/commandesbydate/:date',FactController.findAllbydateee);
module.exports=router;  