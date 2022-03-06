const { status } = require("express/lib/response");
const Commande= require("../Models/commandeModel");
const Facteur = require("../Models/facteurModel");
const Restaurant = require("../Models/restaurantModel");





exports.findCoursier = async(req, res,next) => {
  try {
    const [tabCom] = await  Facteur.findbyidfact(req.query.id_fact);
  
let coursier ={
    id_fact:14,
    status:"en cours",
    id_coursier:1,
    nomCoursier: "Sami",
    prenomCoursier:"Ayechi",
    numCoursier: "21548769",
    imageCoursier:"c.jpg",

}
    let TAB=[];
    for(var j=0;j<tabCom.length;j++)
  {
    statuss=tabCom[j].status;
    id_fact=tabCom[j].id_fact;
console.log(tabCom[j].status)
    id_coursier=coursier.id_coursier
    nomCoursier=coursier.nomCoursier
    prenomCoursier=coursier.prenomCoursier
    numCoursier=coursier.numCoursier
    imageCoursier=coursier.imageCoursier

    let json = { 
      id_fact:id_fact,
       status:`${statuss}`,
       id_coursier:id_coursier,
       nomCoursier: `${nomCoursier}`,
       prenomCoursier:`${prenomCoursier}`,
       numCoursier: `${numCoursier}`,
       imageCoursier: `${imageCoursier}`,
   
   
      
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
