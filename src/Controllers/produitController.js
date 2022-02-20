const Produit= require("../Models/produitModel")
const DetailProd= require("../Models/detailprodModel")

// find all products
exports.findAll = function(req, res) {
    Produit.findAll(function(err, produit) {
    if (err){
      res.send(err);
    }else{
    
      res.send(produit);
    }  
  });
};



// find all products where thier cat was repa
exports.findAllRepas = function(req, res) {
    Produit.findAllRepas(function(err, produit) {
    if (err){
      res.send(err);
    }else{
    
      res.send(produit);
    }  
  });
};

// find all products  where thier cat was boisson
exports.findAllBoissons = function(req, res) {
    Produit.findAllBoissons(function(err, produit) {
    if (err){
      res.send(err);
    }else{
    
      res.send(produit);
    }  
  });
};

// find all products  where thier cat was dessert
exports.findAllDesserts = function(req, res) {
    Produit.findAllDesserts(function(err, produit) {
    if (err){
      res.send(err);
    }else{
    
      res.send(produit);
    }  
  });
};

exports.Images= async(req,res)=>{

  
    Produit.fetchImage(req.query.id_prod,function(err, produit) {
      
           
            if (err){
              res.send(err);
            }else{

              res.send(produit);
            }  
          });
       
      
    };


    // postProd 
    exports.postProd= async(req,res)=>{

     
      Produit.postProd(req.query.nomProd,req.query.id_resatu,id_cat,function(err, produit) {
              if (err){
                res.json({
                  succes:false,
                  message: 'erreur lors de l ajout',
                       })  
              }else{
  
                res.json({
                  succes:true,
                  message: 'ajouter avec succès',
                       })  
              }  
            });
         
      DetailProd.postDetailProd(req.query.prixProd,req.query.id_unite,function(err, produit) {
        if (err){
          res.json({
            succes:false,
            message: 'erreur lors de l ajout',
                 })  
        }else{

          res.json({
            succes:true,
            message: 'ajouter avec succès',
                 })  
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
