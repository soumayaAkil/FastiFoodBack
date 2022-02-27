var dbConn=require('../../Config/db');


 var Unite=function(unite){
     this.id_unite=unite.id_unite;
     this.nomUnite=unite.nomUnite;
     this.id_cat=unite.id_cat;

 };


//Gett all data
Unite.findAll=function(result){
    dbConn.query("Select * from unite", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{

            result( res);
        }
    })

};
//find unite
Unite.find=function(id_unite,result){
    dbConn.query("Select * from unite WHERE id_unite = ?", [id_unite], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};

//find unite by id cat
Unite.findUnitByIdCat=function(id_cat,result){
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




module.exports=Unite;
 