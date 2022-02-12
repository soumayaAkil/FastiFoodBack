var dbConn=require('../../Config/db');


 var Payeline=function(payeline){
     this.id_paye=payeline.id_paye;
     this.num_carte=payeline.num_carte;
     this.id_com=payeline.id_com;

 };


//Gett all data
Payeline.findAll=function(result){
    dbConn.query("Select * from payeline", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{

            result( res);
        }
    })

};
//find Payeline
Payeline.find=function(id_paye,result){
    dbConn.query("Select * from payeline WHERE id_paye = ?", [id_paye], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};


module.exports=Payeline;
 