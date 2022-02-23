const Facture= require("../Models/FacComModel")
//Afficher liste des factures 
exports.findAll = function(req, res) {
    Facture.findAll(function(err, facture) {
      if (err){
        res.send(err);
      }else{
      
        res.send(facture);
      }  
    });
  };
  