const Detailprod= require("../Models/detailProdModel")

//get all products
exports.findAll= async (req,res,next)=>{
    
    const ress= await Detailprod.fetchAll();
    rows = ress[0];
    if(rows.length !== 0)
    {
        res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            Detailprod: 'aucun detail prod',
        });
     }
    }

// findDetailByProd

exports.findDetailByProd= async (req,res,next)=>{

    const id_prod = req.query.id_prod;
    const data = await Detailprod.findDetailByProd(id_prod);
    
    const results = data[0];
    
      if (data[0].length !== 0){
         
        res.send(results);

        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'prod introuvable',
                   });
        }  
}

// findPrice

exports.findPrice= async (req,res,next)=>{

    const id_prod = req.query.id_prod;
    const id_unite = req.query.id_unite;
    const data = await Detailprod.findPrice(id_prod,id_unite);
    
    const results = data[0];
    
      if (data[0].length !== 0){
         
        res.send(results);

        }
        else if(data[0].length == 0) { 
            res.json({succes: false,
                message: 'prod introuvable',
                   });
        }  
}

