var db=require('../../Config/database');


module.exports = class Produit{
    constructor(id_prod,nomProd,imageProd,id_restau,id_cat){
        this.id_prod=id_prod;
        this.nomProd=nomProd;
        this.imageProd=imageProd;
        this.id_restau=id_restau;
        this.id_cat=id_cat;
   
      
    }
  

    static fetchAll(){
        return db.execute (
            'Select id_prod,nomProd,id_restau,id_cat from produit');
     
    }

    static findProdByIdCat(id_cat){
        return db.execute (
            'Select id_prod,nomProd,id_restau,id_cat FROM produit WHERE id_cat = ?',[id_cat]);
     
    }
    static findAllRepas(){
        return db.execute (
            'Select id_prod,nomProd,id_restau,id_cat FROM produit WHERE id_cat = 2');
     
    }
    static findAllBoissons(){
        return db.execute (
            'SELECT id_prod,nomProd,id_restau,id_cat FROM produit WHERE id_cat = 1');
     
    }
    static findAllDesserts(){
        return db.execute (
            'Select id_prod,nomProd,id_restau,id_cat from produit WHERE id_cat = 3');
     
    }

    static findProd(id_prod){
        return db.execute (
            'Select * from produit WHERE id_prod = ?',[id_prod]);
     
    }

    static fetchImage(id_prod){
        return db.execute (
            'SELECT imageProd FROM produit WHERE id_prod = ?',[id_prod]);
     
    }

    static getid(){
        return db.execute (
            'SELECT MAX(id_prod) as id_prod FROM produit');
     
    }

    static postProd(nomProd,id_restau,id_cat){
 
        return db.execute('INSERT INTO produit (nomProd,id_restau,id_cat) VALUES (?,?,?)',
        [nomProd,id_restau,id_cat] );
       
       
    }
 

   
};