
const Produit= require("../Models/produitModel")
const Restaurant= require("../Models/restaurantModel")


var multer, storage, path, crypto;
multer = require('multer')
path = require('path');
crypto = require('crypto')


// for productt

exports.postPicture =async (req, res)=> {
      
        res.redirect("/images/" + req.file.filename);
        console.log(req.file.filename);
       //console.log("resssss",res.status(200))
       const ress= await Produit.getid();
       rows = ress[0];
       id_prod=rows[0].id_prod;
       console.log("max id",id_prod);

       
      imageProd=req.file.filename;

       const restt= await Produit.postImageProd(imageProd,id_prod);

        return res.status(200);
        
      }
  

// for resatuuu

exports.postLogo =async (req, res)=> {
console.log("filee", req.file)
      
  res.redirect("/images/" + req.file.filename);
 
 // console.log("second",req.file.originalname);
 //console.log("resssss",res.status(200))
 const ress= await Restaurant.getid();
 rows = ress[0];
 id_restau=rows[0].id_restau;


 
logo=req.file.filename;

 const restt= await Restaurant.postImageRestau(logo,id_restau);

  return res.status(200);
  
}
