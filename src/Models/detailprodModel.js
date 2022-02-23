var db=require('../../Config/database');


module.exports = class DetailProd{
    constructor(id_detailProd,prixProd,id_prod,id_unite){
        this.id_detailProd=id_detailProd;
        this.prixProd=prixProd;
        this.id_prod=id_prod;
        this.id_unite=id_unite;
   
      
    }
  

    static fetchAll(){
        return db.execute (
            'Select * from detailprod');
     
    }



    static find(id_detailProd){
        return db.execute (
            'Select * from detailprod WHERE id_detailProd = ?',[id_detailProd]);
     
    }

    static findDetailByProd(id_prod){
        return db.execute (
            'Select * from detailprod WHERE id_prod = ?',[id_prod]);
     
    }


    static findPrice(id_prod,id_unite){
        return db.execute (
            'Select prixProd from detailprod WHERE id_prod = ? and id_unite = ?',[id_prod,id_unite]);
     
    }
    

    static postDetailProd(prixProd,id_prod,id_unite){
 
        return db.execute('INSERT INTO detailprod (prixProd,id_prod,id_unite) VALUES (?,?,?)',
        [prixProd,id_prod,id_unite] );
       
       
    }
 

   
};