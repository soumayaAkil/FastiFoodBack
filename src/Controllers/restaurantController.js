const Restaurant= require("../Models/restaurantModel")

//get all products
exports.findAll= async (req,res,next)=>{
    
  const ress= await Restaurant.fetchAll();
  rows = ress[0];
  if(rows.length !== 0)
  {
      res.send(rows);

  } else 
   {
      res.json({
          succes: false,
          produit: 'aucun restau',
      });
   }
  }

  //get all products
exports.findRestau= async (req,res,next)=>{
    
  let id_restau=req.params.id_restau;
  const ress= await Restaurant.getRestauByid(id_restau);
  rows = ress[0];
  if(rows.length !== 0)
  {
      res.send(rows);

  } else 
   {
      res.json({
          succes: false,
          produit: 'aucun restau',
      });
   }
  }



  // insert restau
exports.post = async (req,res,next)=>{

  let designation= req.body.designation;
 



  console.log("bode",req.body.designation);

      const rest=await Restaurant.postRestau(designation);

      console.log(rest);
  
      res.send("Ajouter avec succée");

  }
