var dbConn=require('../../Config/db');


 var Categorie=function(categorie){
     this.id_cat=categorie.id_cat;
     this.nomCat=categorie.nomCat;
     this.imageCat=categorie.imageCat;
     this.id_restau=categorie.id_restau;


 };


//Gett all data
Categorie.findAll=function(result){
    dbConn.query("Select * from categorie", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
                 result( res);
        }
    })

};

//Gett data by id_restau
Categorie.findCatByIdRestau=function(id_restau,result){
    dbConn.query("Select * from categorie WHERE id_restau = ?", [id_restau], function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
                console.log("gegddvdfv",res);
                 result( res);
        }
    })

};





module.exports=Categorie;