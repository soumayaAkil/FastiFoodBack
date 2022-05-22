var db=require('../../Config/database')






//module.exports=ProdCom;
module.exports = class ProduitsCommandes{
    constructor(id_prod,nomProd,imageProd,id_restau,id_cat){
        this.id_detailCom=prodcom.id_detailCom;
        this.id_detailProd=prodcom.id_detailProd;
        this.quantite=prodcom.quantite;
        this.id_com=prodcom.id_com;
   
      
    }
  
//detailles by idcommande 
    static fetchAll(id_com){
        return db.execute (
            "SELECT detail_com.id_detailCom,detail_com.quantite,produit.nomProd As produit ,unite.nomUnite As unite ,produit.imageProd As image_produit,detailprod.prix As prix   FROM detail_com JOIN detailprod ON detail_com.id_detailProd = detailprod.id_detailProd Join produit ON produit.id_prod = detailprod.id_prod Join unite ON unite.id_unite = detailprod.id_unite WHERE id_com =?" ,[id_com]);
     
    }

      
//findAllproduitscomA
static findAllproduitscomA(id_com){
    return db.execute (
        "SELECT detail_com.id_detailCom,detail_com.quantite,produit.nomProd As produit ,unite.nomUnite As unite ,produit.imageProd As image_produit ,detailprod.prixProd  FROM detail_com JOIN detailprod ON detail_com.id_detailProd = detailprod.id_detailProd Join produit ON produit.id_prod = detailprod.id_prod Join unite ON unite.id_unite = detailprod.id_unite WHERE id_com =?" ,[id_com]);
 
}


}
