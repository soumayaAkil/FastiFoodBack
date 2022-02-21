const CommandesR= require("../Models/commandesRModel")
//Afficher liste des commandes
exports.findAll = function(req, res) {
    CommandesR.findAllcommandesR(req.params.id_fact,function(err, cmdR) {
      if (err){
        res.send(err);
      }else{
      
        res.send(cmdR);
      }  
    });
  };