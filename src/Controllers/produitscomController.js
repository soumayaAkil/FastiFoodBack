const ProdComm= require("../Models/produitscomModel")
//Afficher liste des ProduitsCommandes
exports.findAll = function(req, res) {
    ProdComm.findAllproduitscommandes(req.params.id_com,function(err, prodcmd) {
      if (err){
        res.send(err);
      }else{
      
        res.send(prodcmd);
      }  
    });
  };