var dbConn=require('../../Config/db');


 var Detailcom=function(detailcom){
     this.id_detailProd=detailcom.id_detailProd;
     this.id_detailCom=detailcom.id_detailCom;
     this.quantite=detailcom.quantite;
     this.id_com=detailcom.id_com;
    

 };


//Gett all data
Detailcom.findAll=function(result){
    dbConn.query("Select * from detail_com", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{

            result( res);
        }
    })

};
//find Detailcom
Detailcom.find=function(id_detailProd,result){
    dbConn.query("Select * from detail_com WHERE id_detailProd = ?", [id_detailProd], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};


module.exports=Detailcom;