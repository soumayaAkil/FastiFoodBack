
const Produit= require("../Models/produitModel")


var multer, storage, path, crypto;
multer = require('multer')
path = require('path');
crypto = require('crypto')


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
  


