const Produit= require("../Models/produitModel")

exports.findAll = function(req, res) {
    Produit.findAll(function(err, produit) {
    if (err){
      res.send(err);
    }else{
    
      res.send(produit);
    }  
  });
};


/*
const produit = require('../models/produit');
const{ validationResult } = require('express-validator');

 
exports.getAllproduits = async(req, res, next) => {
try {
const [allproduits] = await produit.fetchAll();
res.status(200).json(allproduits);

}catch(err) {
    if(!err.statuscode){
        err.statuscode = 500
    }
    next(err);

    }
 
};

exports.Images= async(req,res,next)=>{

    try {
      const [allfemmes] = await produit.fetchImage();
      console.log(allfemmes);
      res.status(200).json(allfemmes);
      
      }catch(err) {
          if(!err.statuscode){
              err.statuscode = 500
          }
          next(err);
      
          }
       
      };
exports.getPord = async(req, res, next) => {
    const nom_P = req.body.nom_P;
    try {
    const prod= await produit.fetchProduit(nom_P);
   const storedProd= prod[0][0];
   res.status(200).json(storedProd);

    }catch(err) {
        if(!err.statuscode){
            err.statuscode = 500
        }
        next(err);
    
        }
     
    };
    
*/
