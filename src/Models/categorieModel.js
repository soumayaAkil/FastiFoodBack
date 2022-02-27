var db=require('../../Config/database');

module.exports = class Categorie{
    constructor(id_cat,nomCat,imageCat,id_restau){
        this.id_cat=id_cat;
        this.nomCat=nomCat;
        this.imageCat=imageCat;
        this.id_restau=id_restau;
   
      
    }
    static findCatByIdRestau(id_restau){
        return db.execute (
            "Select * from categorie WHERE id_restau = ?", [id_restau]);
     
    }
    static fetchImage(id_cat){
        return db.execute (
            'SELECT imageCat FROM categorie WHERE id_cat = ?',[id_cat]);
     
    }

}