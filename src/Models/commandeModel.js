const db = require('../../config/database');



module.exports = class Commande {
    constructor(commande){
    this.id_com=commande.id_com;
    this.somme_com=commande.somme_com;
    this.reponse=commande.reponse;
    this.id_restau=commande.id_restau;
    this.id_fact=commande.id_fact;
    }  
    static anulerComM(id_com){
        return db.execute('DELETE FROM commande WHERE id_com=?',[id_com]);
    }
    static findRestau (id_restau){
        return db.execute('SELECT * FROM restaurant where id_restau=?' ,[id_restau]);
    } 
    static findbyidRestau (id_restau){
        return db.execute('SELECT * FROM commande where id_restau=?' ,[id_restau]);
    }
    static findbyidRestauAccept (id_restau,reponse){
        return db.execute('SELECT * FROM commande where id_restau=? and reponse = ?' ,[id_restau,reponse]);
    }  
    static findbyidRestauRefuse (id_restau,reponse){
        return db.execute('SELECT * FROM commande where id_restau=? and reponse = ?' ,[id_restau,reponse]);
    }  
    static findbyidCom (id_com){
        return db.execute('SELECT * FROM commande where id_com=?' ,[id_com]);
    } 
    static findbyidFact (id_fact){
        return db.execute('SELECT * FROM commande where id_fact=?' ,[id_fact]);
    } 
    static findbyidFRep (id_fact,reponse){
        return db.execute('SELECT * FROM commande where id_fact=? and reponse=?' ,[id_fact,reponse]);
    } 
 
    static updaterep (commande,reponse){
        return db.execute('UPDATE commande SET  somme_com=? ,reponse=? ,id_restau=?,id_fact=? where id_com=?' ,
        [commande.somme_com,reponse,commande.id_restau,commande.id_fact,commande.id_com]);
    } 
   



}

/* var Commande=function(commande){
     this.id_com=commande.id_com;
     this.adresse=commande.adresse;
     this.id_client=commande.id_client;
     this.somme_com=commande.somme_com;
     this.reponse=commande.reponse;
     this.status=commande.status;
     this.mode_payement=commande.mode_payement;
     this.date=commande.date;
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