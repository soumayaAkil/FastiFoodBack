const Facteur= require("../Models/facteurModel")


exports.findAllbyIdClient = async(req, res, next) => {
    try {
      const [Response] = await  Facteur.findbyidClient(req.body.id_client);
      res.status(200).json(Response[0]);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }};
    
exports.findAllbyIdFact = async(req, res, next) => {
    try {
      let [Respons] = await  Facteur.findbyidClient(req.body.id_fact);
      res.status(200).json(Respons[0]);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }};
exports.annulerFact = async(req, res, next) => {
  try {
    const [Response] = await  Facteur.findbyidfact(req.body.id_fact);
    console.log(Response[0]);
    const Rep= await  Facteur.updatestatus(Response[0],"Annuler");
    res.status(200).json(Rep);
  } catch (err) {
    if (!err.statusCode) {
      err.statusCode = 500;
    }
    next(err);
  }};


/*
  exports.ss = async(req, res, next) => {
    try {
      const Response = await  Facteur.findbyidfact(req.body.id_fact);
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
  
  res.status(200).json(TAB);   
  
     } 
       catch(err) {
          if(!err.statuscode){
              err.statuscode = 500
          }
   next(err);
      
        }
        }
        */