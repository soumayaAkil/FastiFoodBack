var dbConn=require('../../Config/db');


 var Detailprod=function(dedtailprod){
     this.id_detailProd=dedtailprod.id_detailProd;
     this.prixProd=dedtailprod.prixProd;
     this.id_prod=dedtailprod.id_prod;
     this.id_unite=dedtailprod.id_unite;
    

 };
// Post detaill

//post Produit
Produit.postDetailProd=function(prixProd,id_prod,id_unite,result){
    dbConn.query("INSERT INTO detailprod (prixProd,id_prod,id_unite) VALUES (?,?,?)", [prixProd,id_prod,id_unite], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};

//Gett all data
Detailprod.findAll=function(result){
    dbConn.query("Select * from detailprod", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{

            result( res);
        }
    })

};
//find Detailprod
Detailprod.find=function(id_detailProd,result){
    dbConn.query("Select * from detailprod WHERE id_detailProd = ?", [id_detailProd], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};
//find Detailprod by id_prod
Detailprod.findDetailByProd=function(id_prod,result){
    dbConn.query("Select * from detailprod WHERE id_prod = ?", [id_prod], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};
//find price by id_unit
Detailprod.findPrice=function(id_prod,id_unite,result){
    dbConn.query("Select prixProd from detailprod WHERE id_prod = ? and id_unite = ?", [id_prod,id_unite], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};

module.exports=Detailprod;