const Commande= require("../Models/commandeModel");
const Facteur = require("../Models/facteurModel");
const Restaurant = require("../Models/restaurantModel");





exports.findAllbyIdFact = async(req, res,next) => {
  try {
    const [tabCom] = await  Commande.findbyidFact(req.query.id_fact);
  

    let TAB=[];
    for(var j=0;j<tabCom.length;j++)
  {console.log(tabCom[j])
    reponse=tabCom[j].reponse;
    somme_com=tabCom[j].somme_com;
    id_com=tabCom[j].id_com;
    id_restau=tabCom[j].id_restau;
    id_fact=tabCom[j].id_fact;
    let rest =await Commande.findRestau(id_restau);
    
    designation=rest[0][0].designation;
    logo=rest[0][0].logo;
    let json = {
      id_com:id_com,
      somme_com:somme_com,
      reponse:`${reponse}`,
      nomRestau: `${designation}`,
      logo:`${logo}`,
      id_fact:id_fact
   
      
    }


TAB.push(json);
};
console.log(TAB);
    res.status(200).json(TAB);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }};
  
  exports.findAllbyIdRestau = async(req, res,next) => {
    try {
      id_restau=req.query.id_restau;
      const [tabCom] = await  Commande.findbyidRestau(req.query.id_restau);
    
      let TAB=[];
    
    console.log(tabCom.length)
      for(var j=0;j<tabCom.length;j++)
    { id_com=tabCom[j].id_com;
      reponse=tabCom[j].reponse;
      somme_com=tabCom[j].somme_com;
      
      
      id_fact=tabCom[j].id_fact;
      let rest =await Facteur.findbyidfact(id_fact);
      mode_payement=rest[0][0].mode_payement;
      adresse=rest[0][0].adresse;
      id_client=rest[0][0].id_client;
      date=rest[0][0].date;
      stat=rest[0][0].status;
      etat=rest[0][0].etat;
      heure=rest[0][0].heure;
      let json = {
        id_com:id_com,
        somme_com:somme_com,
        reponse:`${reponse}`,
        id_client:id_client,
        adresse: `${adresse}`,
        mode_payement:`${mode_payement}`,
        date:`${date}`,
        status:`${stat}`,
        etat:`${etat}`,
        heure:`${heure}`
     
        
      }
  
  
  TAB.push(json);
  };
  console.log(TAB);
      res.status(200).json(TAB);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }};
    

    // accept commande
    exports.findbyidRestauAccept = async(req, res,next) => {
      try {
        id_restau=req.query.id_restau;
        let reponse='accepte';
        const tabCom = await  Commande.findbyidRestauAccept(req.query.id_restau,reponse);
      
        let TAB=[];
        for(var j=0;j<tabCom[0].length;j++)
      {
        reponse=tabCom[0][j].reponse;
        somme_com=tabCom[0][j].somme_com;
        id_com=tabCom[0][j].id_com;
        
        id_fact=tabCom[0][j].id_fact;
        let rest =await Facteur.findbyidfact(id_fact);
        mode_payement=rest[0][0].mode_payement;
        adresse=rest[0][0].adresse;
        id_client=rest[0][0].id_client;
        date=rest[0][0].date;
        stat=rest[0][0].status;
        let json = {
          id_com:id_com,
          adresse: `${adresse}`,
          id_client:id_client,
          somme_com:somme_com,
          reponse:`${reponse}`,
          status:`${stat}`,
          date:`${date}`,
          mode_payement:`${mode_payement}`  
        }
    
    
    TAB.push(json);
    };
    console.log(TAB);
        res.status(200).json(TAB);
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }};


    //refuse commande 
exports.findbyidRestauRefuse = async(req, res,next) => {
    try {
      id_restau=req.query.id_restau;
      let reponse='refuse';
      const tabCom = await  Commande.findbyidRestauRefuse(req.query.id_restau,reponse);

      console.log("vakddddddd  ",tabCom);

      let TAB=[];
      for(var j=0;j<tabCom[0].length;j++)
    {
    
      reponse=tabCom[0][j].reponse;
      somme_com=tabCom[0][j].somme_com;
      id_com=tabCom[0][j].id_com;
      
      id_fact=tabCom[0][j].id_fact;
      let rest =await Facteur.findbyidfact(id_fact);
      mode_payement=rest[0][0].mode_payement;
      adresse=rest[0][0].adresse;
      id_client=rest[0][0].id_client;
      date=rest[0][0].date;
      stat=rest[0][0].status;
      let json = {
          id_com:id_com,
          adresse: `${adresse}`,
          id_client:id_client,
          somme_com:somme_com,
          reponse:`${reponse}`,
          status:`${stat}`,
          date:`${date}`,
          mode_payement:`${mode_payement}`
     
        
      }
  
  
  TAB.push(json);
  };
  console.log(TAB);
      res.status(200).json(TAB);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }};
    
  



  exports.findAllbyIdClRep = async(req, res,next) => {
    try {
      const  [tabFact] = await Facteur.findbyidClient(req.body.id_client);
    
  let TAB=[];
    for(var j=0;j<tabFact.length;j++)
  {
    let f=tabFact[j].id_fact;
    const tabCom = await   Commande.findbyidFRep(f,req.body.reponse);
    for(var i=0;i<tabCom.length;i++)
    {
    reponse=tabCom[0][j].reponse;
    somme_com=tabCom[0][j].somme_com;
    id_restau=tabCom[0][j].id_restau;
    const rest =await Commande.findRestau(id_restau);
  
    designation=rest[0][0].designation;
    logo=rest[0][0].logo;
    let json = {
                  somme_com:somme_com,
                  reponse:`${reponse}`,
                  designation: `${designation}`,
                  logo:`${logo}`,
               
                  
                
    };
    
    TAB.push(json);
  }
  }

  res.status(200).json(TAB); 
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }};

exports.putrep = async (req, res, next) => {
  try {
    reponse=req.query.reponse;
    id_com=req.query.id_com;
      
    const Rep = await  Commande.findbyidCom(id_com);
    console.log("commande classe") 
    commande=Rep[0][0];
   
    console.log(commande)
    const putResponse = await  Commande.updaterep(commande,reponse);
    res.status(200).json('true');
  } catch (err) {
    res.status(200).json('false');
  }};

exports.anulerCom = async(req,res,next) =>{
  try{
    id_com=req.query.id_com;
   
     const Repo = await  Commande.findbyidCom(id_com); 
     id_fact=Repo[0][0].id_fact;
      console.log(id_fact) 
    const Rep = await  Commande.anulerComM(id_com);
 const [r]=await Commande.findbyidFact(id_fact);
 console.log("fff")
 console.log(r[0]!=null);
 if(r[0]==null)
 {
  const resultat=await Facteur.deleteF(id_fact);
 }
    res.status(200).json('true');
  } catch (err) {
    res.status(200).json('false');
  }};













/*const prod = require('../models/prodModels');
const produit = require('../models/produit');
const unite = require('../models/uniteModel');
const{ validationResult } = require('express-validator');
var nodemailer = require('nodemailer');
exports.postListe= async(req,res,next)=>{
  const errors= validationResult(req);

try{
    const type_production="output";
    const status="pr??t";
    

let liste=req.body;
let date=liste[0].date_transaction;
let somme_prix=liste[0].somme_prix;
let id=liste[0].id;
   let result =await prod.postP(type_production,status,date,somme_prix,id);

// production sans date 

    const id_max=await prod.findId();
   const id_production=id_max[0][0]['max(id_production)'];  
  for(var i=0; i<liste.length;i++)
  {
    let quantite= liste[i].quantite;
    let id_produit=liste[i].id_produit ;
    let somme = liste[i].somme ;
    let produ =await prod.postD(id_produit,id_production,somme,quantite);
   // date  logique dans detail prod , principr id et dtae le meme un seul 
  }
   res.status(201).json({message:'liste  production enregistrer'})

}catch(err){
  if(!err.statusCode){
    err.statusCode=500;
    console.log(err);
  }  
  next(err);
  } 
}
    
exports.put= async (req, res, next) => {
  try{
   
    const type_production="output";
    const status="pr??t";
    
let liste=req.body;
let somme_prix=liste[0].somme_prix;
let date=liste[0].date_transaction;
let id=liste[0].id;
const putResponse = await prod.delete(liste[0].id_production);
   let result =await prod.postP(type_production,status,date,somme_prix,id);



    const id_max=await prod.findId();
   const id_production=id_max[0][0]['max(id_production)'];  
  for(var i=0; i<liste.length;i++)
  {
    let quantite= liste[i].quantite;
    let somme = liste[i].somme;
    let id_produit=liste[i].id_produit;
    let produ =await prod.postD(id_produit,id_production,somme,quantite);

  }
 



  res.status(201).json({message:'detail production modifier'})
    
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.delete= async (req, res, next) => {



  try{
   

const putResponse = await prod.delete(req.body.id_production);
   
  res.status(201).json({message:'detail production supprimer'})
    
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }
};


exports.getproduitidptod=async(req,res,next)=>{
  try{
  //id production
const a=req.body.id_production;

  let [er]=await prod.selectproduit(a);
let TAB=[];
  for(var j=0;j<er.length;j++)
{

  let q=er[j].quantite;
 
  let [prod]= await produit.fetchP(er[j].id_produit);
let n=prod[0].nom_produit;
let p=prod[0].prix_P;
let imp=prod[0].image_produit;
let id=prod[0].id_U;
let s=er[j].somme;

let un= await unite.find(id);
unit=un[0][0].nom_U;
let imu=un[0][0].image_U;
let json = {
  nom_produit:n,
              quantite:`${q}`,
              unite:unit,
              prix:`${p}` ,
              image_P:imp,
              image_U:imu,
           
              somme:`${s}`,
            
};

TAB.push(json);
}
res.status(200).json(TAB);   

   } 
     catch(err) {
        if(!err.statuscode){
            err.statuscode = 500
        }
 next(err);
    
      }
      }


// select femmes.* production.* from femmes Inner join production on femme.id=production.id_production
exports.getproductionidfemme=async(req,res,next)=>{
  try{

  const id=req.body.id;
  const status=req.body.status;
  var TAB =[];
  const [r]=await prod.selectprod(id ,status,"output");
  var TAB =[];
for(var i=0;i<r.length;i++)
{  
  let date=r[i].date_transaction;
  let sp=r[i].somme_prix;
let a=r[i].id_production;

let json = {
   date:`${date}`,
  somme_prix:`${sp}`,
  
  id_production:`${a}`};

TAB.push(json);
}
res.status(200).json(TAB);  
  }catch
  {
   if(!err.statuscode){
      err.statuscode = 500
  }
next(err);
  }
}
*/


/*


exports.getP= async(req,res,next) =>{
  try {
    const id=8;
    const [r]=await prod.selectprod(id ,"pr??t","output");
    var TAB =[];
for(var i=0;i<r.length;i++)
{  
  let a=r[i].id_production;
  ////
  let date=r[i].date_transaction;
  let sp=r[i].somme_prix;
  let [er]=await prod.selectproduit(a);

console.log(er[0].id_produit);
  for(var j=0;j<er.length;j++)
{

  let q=er[j].quantite;
 
  let [prod]= await produit.fetchP(er[j].id_produit);
let n=prod[0].nom_P;
let p=prod[0].prix_P;
let id=prod[0].id_unite;
let s=er[j].somme;

let un= await unite.find(id);
unit=un[0][0].nom_U;
let json = {
              nom_produit:n,
              quantite:`${q}`,
              unite:unit,
              prix:`${p}` ,
              date:`${date}`,
              somme:`${s}`,
              somme_prix:`${sp}`,
              id_production:`${a}`};

    TAB.push(json);
}   
}

res.status(200).json(TAB);   
    }catch(err) {
        if(!err.statuscode){
            err.statuscode = 500
        }
 next(err);
    
        }

}


*/





























