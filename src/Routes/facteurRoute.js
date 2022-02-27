const express = require('express')
const router = express.Router()
const FactController=require("../Controllers/facteurController");
router.get('/GetAllFacteursByIdClient/:id_client', FactController.findAllbyIdClient);
router.get('/GetAllFacteursByIdFact', FactController.findAllbyIdFact);
router.put('/annulerFacteur',FactController.annulerFact);
module.exports=router;  