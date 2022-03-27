const express= require('express');
const Promo= require("../Models/promotionModel")
const Commande= require("../Models/commandeModel");
//get all cat by id restau
exports.findPromotion= async (req,res,next)=>{

  try {
    const [ress]= await Promo.getall();
    let TAB=[];
    for(var j=0;j<ress.length;j++)
  {
    id_promo=ress[j].id_promo;
    photo_promo=ress[j].photo_promo;
    prix_promo=ress[j].prix_promo;
    id_restau=ress[j].id_restau;
   
    let rest =await Commande.findRestau(id_restau);
    
    designation=rest[0][0].designation;
    logo=rest[0][0].logo;
    let json = {
        id_promo:id_promo,
        photo_promo:`${photo_promo}`,
        prix_promo:prix_promo,
        designiation: `${designation}`,
        id_restau:id_restau
      
    }


TAB.push(json);
};
console.log(TAB);
   
  
    res.status(200).json(TAB);
} catch (err) {
    res.status(500).json('false');
}};

    // fetch image

exports.Images= async (req,res,next)=>{
    const id_promo = req.query.id_promo;
    const data = await Promo.fetchImage(id_promo);
    const results = data[0];

   
      if (data[0].length !== 0){
          
          var image=results[0].photo_promo;
          res.send(image);

        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'image introuvable',
                   });
        }  
}
