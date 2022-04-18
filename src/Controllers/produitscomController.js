const ProdComm= require("../Models/produitscomModel")
//Detailles par idcommande
exports.findAll = async (req,res,next)=>{

  console.log('idddd',req.query.id_com)
  id_com=req.query.id_com;
  const ress= await ProdComm.fetchAll(id_com);
  rows = ress[0];
  if(rows.length !== 0)
  {
      //console.log(rows)
      res.status(200).json(rows);

  } else 
   {
      res.json({
          succes: false,
          detCom: 'introuvable',
      });
   }
  };
  exports.findAllweb = async (req,res,next)=>{

    console.log('idddd',req.params.id_com)
    id_com=req.params.id_com;
    const ress= await ProdComm.fetchAll(id_com);
    rows = ress[0];
    if(rows.length !== 0)
    {
        console.log(rows)
        res.status(200).json(rows);
  
    } else 
     {
        res.json({
            succes: false,
            detCom: 'introuvable',
        });
     }
    };
  