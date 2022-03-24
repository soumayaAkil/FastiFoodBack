const { status } = require("express/lib/response");
const Commande= require("../Models/commandeModel");
const Facteur = require("../Models/facteurModel");
const Restaurant = require("../Models/restaurantModel");
const coursier =require("../../coursier/coursier.json");




exports.findCoursier = async(req, res,next) => {
  try {
    console.log(req.params.id_fact)
    const [tabCom] = await  Facteur.findbyidfact(req.params.id_fact);
 /* 
 //liason avec BD
let coursier ={
    id_fact:14,
    status:"en cours",
    id_coursier:1,
    nomCoursier: "Sami",
    prenomCoursier:"Ayechi",
    numCoursier: "21548769",
    imageCoursier:"c.jpg",

}
*/
    let TAB=[];
    for(var j=0;j<tabCom.length;j++)
  {
    
    id_fact=tabCom[j].id_fact;
   
     for(var l=0;l<coursier.length;l++)
     {
       if(coursier[l].id_fact==id_fact)
       {
        statuss=coursier[l].status;
   Facteur.loadstatus(id_fact,statuss)
  
    
    id_coursier=coursier[l].id_coursier
    nomCoursier=coursier[l].nomCoursier
    prenomCoursier=coursier[l].prenomCoursier
    numCoursier=coursier[l].numCoursier
    imageCoursier=coursier[l].imageCoursier

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
}
}

};
console.log(TAB);
    res.status(200).json(TAB);
  } catch (err) {
    res.status(500).json('false');
  }};
