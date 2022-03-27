var db=require('../../Config/database');

module.exports = class Promotion{
    constructor(id_promo,photo_promo,prix_promo,id_restau){
        this.id_promo=this.id_promo;
        this.photo_promo=photo_promo;
        this.prix_promo=prix_promo;
        this.id_restau=id_restau;
   
      
    }
    static getall(){
        return db.execute (
            "Select * from promotion ");
     
    }
    static fetchImage(id_promo){
        return db.execute (
            'SELECT photo_promo FROM promotion WHERE id_promo = ?',[id_promo]);
     
    }

}