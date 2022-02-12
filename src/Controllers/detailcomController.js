const Detailcom= require("../Models/detailcomModel")

exports.findAll = function(req, res) {
    Detailcom.findAll(function(err, detailcom) {
    if (err){
      res.send(err);
    }else{
    
      res.send(detailcom);
    }  
  });
};
