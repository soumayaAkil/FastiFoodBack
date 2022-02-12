
const Unite= require("../Models/uniteModel")
//const{ validationResult } = require('express-validator');


exports.findAll = function(req, res) {
  Unite.findAll(function(err, unite) {
    if (err){
      res.send(err);
    }else{
     
      res.send(unite);
    }  
  });
};

/*
 
exports.getAllunites = async(req, res, next) => {
try {
const [allunites] = await unite.fetchAll();
res.status(200).json(allunites);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};

exports.findU=async(req,res,next)=>{
    const nomCat = req.body.nomCat;
 
    const id_u= req.body.nomUnite;
    try{

       
      const Unite =await unite.find(id_u);
     
      if (Unite[0].length !==1)
      {  
        const error =new Error('unite  n\'existe pas');
        error.statusCode=401;
        throw error;
      }else {
        const storedUnite =Unite[0][0];
    
        res.status(200).json(storedUnite);
      }
      
  }catch(err){
        if(!err.statusCode){
          err.statusCode =500;
        }
        next(err);
      }
    
  };
  
  */

