const Detailprod= require("../Models/detailprodModel")

exports.findAll = function(req, res) {
    Detailprod.findAll(function(err, detailprod) {
    if (err){
      res.send(err);
    }else{
    
      res.send(detailprod);
    }  
  });
};

