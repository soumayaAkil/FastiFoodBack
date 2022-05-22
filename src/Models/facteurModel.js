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
    //Facture etat accepte
    static findbyidClientAccepte (id_client){
        return db.execute('SELECT * FROM facteur where id_client=? AND etat="Accepté" ' ,[id_client]);
    } 
    //Facture etat partiel
    static findbyidClientpartiel (id_client){
        return db.execute('SELECT * FROM facteur where id_client=? AND etat="Partiel" ' ,[id_client]);
    } 
     //Facture etat Refuser
     static findbyidClientrefuse (id_client){
        return db.execute('SELECT * FROM facteur where id_client=? AND etat="Refusé" ' ,[id_client]);
    } 
      //Facture aujourd'hui
      static findbyidClientJ(id_client){
        const today = new Date();
          const datee =today.getFullYear()+`-`+`0`+(today.getMonth()+1)+`-`+today.getDate();
       console.log(datee);
   
        return db.execute('SELECT * FROM facteur where id_client=?  ' ,[id_client]);
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
    static loadstatus (id_fact,status){
        return db.execute('UPDATE facteur SET status=? where id_fact=?' ,
        [status,id_fact]);
    }
     static findbydate (date){
        return db.execute('SELECT  facteur.heure,detail_com.quantite,produit.nomProd As produit ,unite.nomUnite As unite ,produit.imageProd As image_produit,detailprod.prix As prix  FROM facteur JOIN commande ON facteur.id_fact = commande.id_fact JOIN detail_com ON commande.id_com = detail_com.id_com JOIN detailprod ON detail_com.id_detailProd = detailprod.id_detailProd Join produit ON produit.id_prod = detailprod.id_prod Join unite ON unite.id_unite = detailprod.id_unite where  commande.id_restau="2" AND date=?' ,[date]);
    } 
  



}