var dbConn=require('../../Config/db');


 var Produit=function(produit){
     this.id_prod=produit.id_prod;
     this.nomProd=produit.nomProd;
     this.imageProd=produit.imageProd;
     this.id_restau=produit.id_restau;
     this.id_cat=produit.id_cat;


 };


//Gett all data
Produit.findAll=function(result){
    dbConn.query("Select * from produit", function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
            console.log("Etudiants :", res);
            result( res);
        }
    })

};

//find Produit
Produit.find=function(id_prod,result){
    dbConn.query("Select * from produit WHERE id_prod = ?", [id_prod], 
    function(err,res){
        if(err){
            console.log("error in fetching data :", err)
            result(err,null);
        }else{
           
            result( res);
        }
    })

};



module.exports=Produit;
    /*
    static find(nom_P,id_unite){
        return db.execute(
            'SELECT * FROM produit WHERE nom_P = ? AND id_unite = ?  ',[nom_P,id_unite]
            );
    }
    static fetchImage(){
        return db.execute('SELECT image_P FROM produit ');   
       }

 static fetchProduit(nom_P)
 {
    return db.execute(
        'SELECT * FROM produit WHERE nom_produit = ?',[nom_P]); 
 }
 static fetchP(id_p)
 {
    return db.execute(
        'SELECT * FROM produit WHERE id_produit = ?',[id_p]); 
 }

};
*/