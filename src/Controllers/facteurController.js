const Facteur= require("../Models/facteurModel")


exports.findAllbyIdClient = async(req, res, next) => {
    try {
      //loadstatus(id_fact,stat);
      let [Response] = await  Facteur.findbyidClient(req.query.id_client);
      for(let k=0;k<Response.length;k++)
      {
      id_fact=Response[k].id_fact;
      console.log(id_fact)
    }
      res.status(200).json(Response);
    } catch (err) {
      if (!err.statusCode) {
        err.statusCode = 500;
      }
      next(err);
    }};
     //Facture etat accepte
    exports.findAllbyIdClientAccepte = async(req, res, next) => {
      try {
      
        let [Response] = await  Facteur.findbyidClientAccepte(req.query.id_client);
       
     
        res.status(200).json(Response);
      } catch (err) {
        if (!err.statusCode) {
          err.statusCode = 500;
        }
        next(err);
      }};
        //Facture etat partiel
        exports.findAllbyIdClientpartiel = async(req, res, next) => {
          try {
          
            let [Response] = await  Facteur.findbyidClientpartiel(req.query.id_client);
         
            res.status(200).json(Response);
          } catch (err) {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
          }};
            //Facture etat refuser
        exports.findAllbyIdClientrefuse = async(req, res, next) => {
          try {
          
            let [Response] = await  Facteur.findbyidClientrefuse(req.query.id_client);
         
            res.status(200).json(Response);
            const today = new Date();
            console.log(today.getFullYear()+"-"+"0"+today.getMonth()+"-"+today.getDate());
          } catch (err) {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
          }};
            //Facture aujourd'hui
        exports.findAllbyIdClientJ = async(req, res, next) => {
          try {
            const today = new Date();
            const datee =today.getFullYear()+`-`+`0`+(today.getMonth()+1)+`-`+today.getDate();
           let [Response] = await  Facteur.findbyidClientJ(req.params.id_client);
           for( let j=0;j<Response[0].length;j++){
            let fat=Response[0][j].date;
        
           
           }
           //res.status(200).json((Response[j].date).toISOString().slice(0, 10));
         
         
       
          } catch (err) {
            if (!err.statusCode) {
              err.statusCode = 500;
            }
            next(err);
          }};
          //les commandes par Date
          exports.findAllbydateee = async(req, res, next) => {
            try {
           
              let [Response] = await  Facteur.findbydate(req.query.date);
              console.log(req.query.date);
          
           
              res.status(200).json(Response);
            } catch (err) {
              if (!err.statusCode) {
                err.statusCode = 500;
              }
              next(err);
            }};

exports.findAllbyIdFact = async(req, res, next) => {
    try {
      let [Respons] = await  Facteur.findbyidClient(req.body.id_fact);
      res.status(200).json(Respons[0].date);
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