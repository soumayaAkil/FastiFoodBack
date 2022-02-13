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

exports.findDetailByProd = function(req, res) {
  Detailprod.findDetailByProd(req.params.id_prod,function(err, detailprod) {
  if (err){
    res.send(err);
  }else{
  
    res.send(detailprod);
  }  
});
};

exports.findPrice = function(req, res) {
  Detailprod.findPrice(req.params.id_prod,req.params.id_unite,function(err, detailprod) {
  if (err){
    res.send(err);
  }else{
  
    res.send(detailprod);
  }  
});
};