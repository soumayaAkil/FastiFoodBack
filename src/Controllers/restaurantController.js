const Restaurant= require("../Models/restaurantModel")
const Produit= require("../Models/produitModel")

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


    //get detail restau
exports.detailRestau= async (req,res,next)=>{
    
  let id_restau=req.params.id_restau;
  const ress= await Restaurant.getSommeCommande(id_restau);
  const resRestau= await Restaurant.getRestauByid(id_restau);
  const resproduits = await Produit.findProdByRestau(id_restau);


  restaurant=resRestau[0];
  produits=resproduits[0];


  somme_com = ress[0][0].somme_com;
  let pourcentage=somme_com*0.15;

          detailRestaurant=
          {
            id_restau:restaurant[0].id_restau,
            designation:restaurant[0].designation,
            logo:restaurant[0].logo,
            recette:somme_com,
            pourcentage:pourcentage,
            produit:produits

          }


  if( ress[0].length !== 0)
  {
      res.send(detailRestaurant);

  } else 
   {
      res.json({
          succes: false,
          produit: 'aucun restau',
      });
   }
  }

