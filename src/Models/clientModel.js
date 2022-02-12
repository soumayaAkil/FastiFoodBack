var dbConn=require('../../Config/db');


 var Client=function(client){
     this.id_client=client.id_client;
     this.Nom=client.Nom;
     this.Prenom=client.Prenom;
     this.adressse=client.adressse;


 };


//Gett all data
Client.findAll=function(result){
    dbConn.query("Select * from etudiant", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
            console.log("Etudiants :", res);
            result( res);
        }
    })

};


module.exports=Client;