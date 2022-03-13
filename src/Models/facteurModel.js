const db = require('../../config/database');



module.exports = class Facteur {
    constructor(fact){

    this.id_fact=commande.id_fact;
    this.adresse=commande.adresse;
    this.id_client=commande.id_client;
    this.somme_fact=commande.somme_fact;
    this.status=commande.status;
    this.mode_payement=commande.mode_payement;
    this.date=commande.date;
    }  
    static findbyidClient (id_client){
        return db.execute('SELECT * FROM facteur where id_client=?' ,[id_client]);
    } 
    static findbyidfact (id_fact){
        return db.execute('SELECT * FROM facteur where id_fact=?' ,[id_fact]);
    } 
    // annuler facteur
    static updatestatus (fact,status){
        return db.execute('UPDATE facteur SET  adresse=? ,date=? ,id_client=? ,somme_fact=?, status=? ,mode_payement=? where id_fact=?' ,
        [fact.adresse,fact.date,fact.id_client,fact.somme_fact,status,fact.mode_payement,fact.id_fact]);
    } 
    static deleteF(id_fact){
        return db.execute('DELETE FROM facteur WHERE id_fact=?',[id_fact]);
    }
  



}