var dbConn=require('../../Config/db');
var Facture=function(facture){
     this.id_fact=facture.id_fact;
     this.adresse=facture.adresse;
     this.date=facture.date;
     this.id_client=facture.id_client;
     this.somme_fact=facture.somme_fact;
     this.status=facture.status;
     this.mode_payement=facture.mode_payement;

 };
//Afficher liste des factures 
Facture.findAll=function(result){
    dbConn.query("Select * from facteur", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{

            result( res);
        }
    })

};
module.exports=Facture;