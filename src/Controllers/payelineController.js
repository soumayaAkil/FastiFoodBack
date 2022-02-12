const Payeline= require("../Models/payelineModel")

exports.findAll = function(req, res) {
    Payeline.findAll(function(err, payeline) {
    if (err){
      res.send(err);
    }else{
    
      res.send(payeline);
    }  
  });
};

