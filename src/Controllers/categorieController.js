const express= require('express');
const Categorie= require("../Models/categorieModel")

//get all cat by id restau
exports.findCatByIdRestau= async (req,res,next)=>{

    id_restau=req.query.id_restau;
    console.log("id_resatu",id_restau);
    const ress= await Categorie.findCatByIdRestau(id_restau);
    rows = ress[0];
    console.log("resultt   : ",rows);
    if(rows.length !== 0)
    {
        res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            Categorie: 'aucune Categorie',
        });
     }
    }

    // fetch image

exports.Images= async (req,res,next)=>{
    const id_cat = req.query.id_cat;
    const data = await Categorie.fetchImage(id_cat);
    const results = data[0];

    console.log("pictureee",results[0].imageCat)
      if (data[0].length !== 0){
          
          var image=results[0].imageCat;
          res.send(image);

        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'image introuvable',
                   });
        }  
}
