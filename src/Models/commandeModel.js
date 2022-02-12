var dbConn=require('../../Config/db');


 var Commande=function(commande){
     this.id_com=commande.id_com;
     this.designation=commande.adresse;
     this.logo=commande.id_client;
     this.logo=commande.somme_com;
     this.logo=commande.reponse;
     this.logo=commande.status;
     this.logo=commande.mode_payement;

 };


//Gett all data
Commande.findAll=function(result){
    dbConn.query("Select * from commande", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{

            result( res);
        }
    })

};
//find Commande
Commande.find=function(id_com,result){
    dbConn.query("Select * from commande WHERE id_com = ?", [id_com], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};


module.exports=Commande;
 

/*
    static postP (type_production,status,date_transaction,somme_prix,id){
        return db.execute('INSERT INTO production (type_production,status,date_transaction,somme_prix,id) VALUES (?,?,?,?,?)',
        [type_production,status,date_transaction,somme_prix,id]);
    }

       
    static findId (){
        return db.execute('SELECT max(id_production) FROM production ');
    } 
    
    static postD (id_produit,id_production,somme,quantite){
        return db.execute('INSERT INTO detail_production (id_produit,id_production,somme,quantite) VALUES (?,?,?,?)',
        [id_produit,id_production,somme,quantite]);
    }
    
   static delete(id_production)
   {
    return db.execute('DELETE FROM production WHERE id_production = ?',

    [id_production]);
}
static fetchAll(){
    return db.execute ('SELECT * FROM production');
 
}

static selectprod(id ,stat,type){
    return db.execute ('SELECT * FROM production WHERE id=? AND status=? AND type_production=?',[id,stat,type]);
 
}
static  selectproduit(id_production){
    return db.execute ('SELECT * FROM detail_production WHERE id_production=?' ,[id_production]);
 
}

}
*/