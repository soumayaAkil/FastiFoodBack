var dbConn=require('../../Config/db');


 var Detailprod=function(dedtailprod){
     this.id_detailProd=dedtailprod.id_detailProd;
     this.prix=dedtailprod.prix;
     this.id_prod=dedtailprod.id_prod;
     this.id_unite=dedtailprod.id_unite;
    

 };


//Gett all data
Detailprod.findAll=function(result){
    dbConn.query("Select * from dedtailprod", function(err,res){
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
    dbConn.query("Select * from dedtailprod WHERE id_detailProd = ?", [id_detailProd], 
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