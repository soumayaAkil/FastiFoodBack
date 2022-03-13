var dbConn=require('../../Config/db');
var ProdCom=function(prodcom){
    this.id_detailCom=prodcom.id_detailCom;
    this.id_detailProd=prodcom.id_detailProd;
    this.quantite=prodcom.quantite;
    this.id_com=prodcom.id_com;
};
//Afficher liste des ProduitsCommandes
ProdCom.findAllproduitscommandes=function(id_com,result){
    dbConn.query("SELECT detail_com.id_detailCom,detail_com.quantite,produit.nomProd As produit ,unite.nomUnite As unite ,produit.imageProd As image_produit FROM detail_com JOIN detailprod ON detail_com.id_detailProd = detailprod.id_detailProd Join produit ON produit.id_prod = detailprod.id_prod Join unite ON unite.id_unite = detailprod.id_unite WHERE id_com =?" ,[id_com],function(err,res){
        if(err){
            console.log("error in fetching data :", err);
            result(err,null);
        }else{

            result( res);
        }
    })

};

module.exports=ProdCom;