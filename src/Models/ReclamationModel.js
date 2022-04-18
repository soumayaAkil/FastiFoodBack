//Afficher les Reclamation du SuperAdmin
const db = require('../../config/database');



module.exports = class Reclamation {
    constructor(id_reclamation,Description,id_client,id_com,id_TR,publish){

    this.id_reclamation=id_reclamation;
    this.Description=Description;
    this.id_client=id_client;
    this.id_com=id_com;
    this.id_TR=id_TR;
    this.publish=this.publish;

    } 
    //List Reclamation du Restaurant  
    static GetReclamations (){
        return db.execute('SELECT type_reclamation.Description As Description_Reclamation,type_reclamation.Designation As Type_reclamation,type_reclamation.Responsable As responsable,client.nom As nom_client ,client.prenom As Prenom_client,client.adresse As Adresse_client,restaurant.designation As restaurant ,commande.somme_com As somme_commande,detail_com.quantite As quantite_produit,produit.nomProd,unite.nomUnite As unite_produit from reclamation join type_reclamation ON reclamation.id_TR=type_reclamation.id_TR join client ON reclamation.id_client =client.id_client Join commande ON reclamation.id_com=commande.id_com JOIN restaurant ON commande.id_restau=restaurant.id_restau JOIN detail_com ON commande.id_com=detail_com.id_com Join detailprod ON detail_com.id_detailProd=detailprod.id_detailProd Join produit ON detailprod.id_prod=produit.id_prod JOIN unite ON detailprod.id_unite=unite.id_unite WHERE type_reclamation.Responsable="Restaurant" AND reclamation.publish="1"');
    } 
 //Liste Reclamation du Super Admin
    static GetLReclamationsSA (){
        return db.execute('SELECT reclamation.id_reclamation, type_reclamation.Description As Description_Reclamation,type_reclamation.Designation As Type_reclamation,type_reclamation.Responsable As responsable,client.nom As nom_client ,client.prenom As Prenom_client,client.adresse As Adresse_client,restaurant.designation As restaurant ,commande.somme_com As somme_commande,detail_com.quantite As quantite_produit,produit.nomProd,unite.nomUnite As unite_produit from reclamation join type_reclamation ON reclamation.id_TR=type_reclamation.id_TR join client ON reclamation.id_client =client.id_client Join commande ON reclamation.id_com=commande.id_com JOIN restaurant ON commande.id_restau=restaurant.id_restau JOIN detail_com ON commande.id_com=detail_com.id_com Join detailprod ON detail_com.id_detailProd=detailprod.id_detailProd Join produit ON detailprod.id_prod=produit.id_prod JOIN unite ON detailprod.id_unite=unite.id_unite');
    } 
    //Envoyer reclamation au restaurant : 
    static mpReclamation(id_reclamation){
        return db.execute('UPDATE reclamation As A  INNER JOIN type_reclamation AS B ON A.id_TR = B.id_TR SET A.publish="1" WHERE  B.Responsable="Restaurant" AND A.id_reclamation = ?',[id_reclamation])
    }
    //get type reclamation
    static TREC(){
        return db.execute('SELECT Designation AS Type_reclamation,id_TR AS id_TypeReclamation  FROM type_reclamation');
    }
    //Post Reclamation
    static postrec(id_client,id_com,id_TR,publish){
        return db.execute('INSERT INTO reclamation (id_client,id_com,id_TR,publish) VALUES (?,?,?,?)',[id_client,id_com,id_TR,publish]);
    }
    //Post Autre TReclamation 
    static postATrec(Designation,Responsable,Description){
        return db.execute('INSERT INTO type_reclamation (Designation,Responsable,Description) VALUES (?,?,?)',[Designation,Responsable,Description]);
    }
    //Get Max id_TypeReclamation
    static getidTR(){
        return db.execute (
            'SELECT MAX(id_TR) As id_TR FROM type_reclamation');
     
    }




}
