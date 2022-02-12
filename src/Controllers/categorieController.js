const Categorie= require("../Models/categorieModel")

exports.findAll = function(req, res) {
  Categorie.findAll(function(err, categorie) {
    if (err){
      res.send(err);
    }else{
    
      res.send(categorie);
    }  
  });
};

/*
const categorie = require('../models/categorieModel');
const{ validationResult } = require('express-validator');

 
exports.getAllunites = async(req, res, next) => {
try {
const [allcats] = await categorie.fetchAll();
res.status(200).json(allcats);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};

exports.findCat=async(req,res,next)=>{
   
    const id_cat= req.body.nomCat;
    try{

       
      const Cat =await categorie.find(id_cat);
     
      if (Cat[0].length !==1)
      {  
        const error =new Error('categorie  n\'existe pas');
        error.statusCode=401;
        throw error;
      }else {
        const storedCat =Cat[0][0];
    
        res.status(200).json(storedCat);
      }
      
  }catch(err){
        if(!err.statusCode){
          err.statusCode =500;
        }
        next(err);
      }
    
  };
  
  

*/