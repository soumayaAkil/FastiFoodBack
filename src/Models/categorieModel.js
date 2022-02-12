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

//find categorie by id
Categorie.find=function(id_cat,result){
    dbConn.query("Select * from unite WHERE id_cat = ?", [id_cat], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};


//find categorie by id restau
Categorie.find=function(id_restau,result){
    dbConn.query("Select * from unite WHERE id_restau = ?", [id_restau], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
                result( res);
        }
    })

};




module.exports=Categorie;