const express= require('express');
const Produit= require("../Models/produitModel")
const Detailprod= require("../Models/detailProdModel")

//get all products
exports.findAll= async (req,res,next)=>{
    
    const ress= await Produit.fetchAll();
    rows = ress[0];
    if(rows.length !== 0)
    {
        res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            produit: 'aucun produit',
        });
     }
    }

    //get all products by id cat 

exports.findProdByIdCat= async (req,res,next)=>{
    id_cat=req.query.id_cat;
    const ress= await Produit.findProdByIdCat(id_cat);
    rows = ress[0];
    if(rows.length !== 0)
    {
        res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            produit: 'aucun produit',
        });
     }
    }
  //get all products by id restau 

  exports.findProdByIdRestau= async (req,res,next)=>{
    let id_restau=req.params.id_restau;
    const ress= await Produit.findProdByRestau(id_restau);
    rows = ress[0];
    if(rows.length !== 0)
    {
        res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            produit: 'aucun produit',
        });
     }
    }

// find all products where thier cat was repa

exports.findAllRepas= async (req,res,next)=>{
    const ress= await Produit.findAllRepas();
    rows = ress[0];
    if(rows.length !== 0)
    {
        res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            produit: 'aucun Repas',
        });
     } 
}


// find all products  where thier cat was boisson

exports.findAllBoissons= async (req,res,next)=>{
    const ress= await Produit.findAllBoissons();
    
    rows = ress[0];
    if(rows.length !== 0)
    {
        res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            produit: 'aucun Boissons',
        });
     } 
}

// find restau by id prod

exports.findNameRestByIdRest= async (req,res,next)=>{
   
    id_prod=req.query.id_prod;
    
    const prod= await Produit.findProd(id_prod);
    id_restau=prod[0][0].id_restau;

    console.log("id_res",id_restau);
    const ress= await Produit.findNameRestByIdRest(id_restau);
   
    rows = ress[0][0];
    console.log("nomm",rows);

  
        res.send(rows);

    
}


// find all products  where thier cat was boisson

exports.findAllDesserts= async (req,res,next)=>{
    const ress= await Produit.findAllDesserts();
    rows = ress[0];
    if(rows.length !== 0)
    {
         res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            produit: 'aucun Desserts',
        });
     } 
}

// fetch image

exports.Images= async (req,res,next)=>{
    const id_prod = req.query.id_prod;
    const data = await Produit.fetchImage(id_prod);
    const results = data[0];
   
      if (data[0].length !== 0){
          var image=results[0].imageProd;
        res.send(image);

        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'image introuvable',
                   });
        }  
}




// insert an prod

exports.post = async (req,res,next)=>{

    let nomProd= req.query.nomProd;
    let id_restau= req.query.id_restau;
    let id_cat= req.query.id_cat;
    let prixProd= req.query.prixProd;
    let id_unite =req.query.id_unite;



        const rest=await Produit.postProd(nomProd,id_restau,id_cat);
      
       

        const ress= await Produit.getid();
        rows = ress[0];
        id_prod=rows[0].id_prod;
      

        


        const restt=await Detailprod.postDetailProd(prixProd,id_prod,id_unite);

        res.send("Ajouter avec succée");

    }

     // nom prod

     exports.findProdByIdProd= async (req,res,next)=>{
        id_prod=req.query.id_prod;
        const ress= await Produit.fetchProd(id_prod);
        rows = ress[0];
       
        if(rows.length !== 0)
        {
            res.send(rows[0]);
    
        } else 
         {
            res.json({
                succes: false,
                produit: 'aucun produit',
            });
         }
        }
           
 
    
    