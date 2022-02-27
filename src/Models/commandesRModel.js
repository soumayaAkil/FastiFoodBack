var dbConn=require('../../Config/db');
var CommandesR=function(commandesR){
    this.id_com=commandesR.id_com;
    this.somme_com=commandesR.somme_com;
    this.reponse=commandesR.reponse;
    this.id_restau=commandesR.id_restau;
    this.id_fact=commandesR.id_fact;
};
//Afficher liste des commandesR 
CommandesR.findAllcommandesR=function(id_fact,result){
    dbConn.query("SELECT commande.id_com,commande.somme_com,commande.reponse,restaurant.designation As restau,restaurant.logo As image FROM commande JOIN restaurant ON commande.id_restau = restaurant.id_restau  WHERE id_fact =?" ,[id_fact],function(err,res){
        if(err){
            console.log("error in fetching data :", err);
            result(err,null);
        }else{

            result( res);
        }
    })

};
module.exports=CommandesR;