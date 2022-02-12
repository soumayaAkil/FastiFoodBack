var dbConn=require('../../Config/db');


 var Restaurant=function(restaurant){
     this.id_restau=restaurant.id_restau;
     this.designation=restaurant.designation;
     this.logo=restaurant.logo;

 };


//Gett all data
Restaurant.findAll=function(result){
    dbConn.query("Select * from restaurant", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{

            result( res);
        }
    })

};
//find restau
Restaurant.find=function(id_restau,result){
    dbConn.query("Select * from restaurant WHERE id_restau = ?", [id_restau], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};


module.exports=Restaurant;
 