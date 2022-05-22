const express = require('express')
const router = express.Router()
const RecController=require("../Controllers/ReclamationController");
router.post('/PostAutreReclamation',RecController.postAUTRE);
//List Reclamation du Restaurant 
router.get('/GetAllRecalamtionRestau', RecController.GetRecalamtions);
//Liste Reclamation du Super Admin
router.get('/GetAllRecalamtionSA', RecController.GetRecalamtionsSA);
   //Envoyer reclamation au restaurant : 
   router.put('/publishreclamation/:id_reclamation',RecController.sendrecrestau);
    //get type reclamation
    router.get('/GetATypeRec', RecController.typereclm);
    //post reclamation 
    router.post('/post',RecController.postrecc);
      //Post Autre TReclamation 
    router.post('/postATR',RecController.postATrec);
    //POST AUTRE 
   
      

module.exports=router;  