

 var db=require('../../Config/database');


module.exports = class Produit{
    constructor(id_restau,designation,logo){
        this.id_restau=id_restau;
        this.designation=designation;
        this.logo=logo;
   
      
    }

    static fetchAll(){
        return db.execute (
            'Select * from restaurant');
     
    }

    static getRestauByid(id_restau){
        return db.execute (
            'Select * from restaurant where id_restau = ?',[id_restau]);
     
    }
    
    static postRestau(designation){
 
        return db.execute('INSERT INTO restaurant (designation) VALUES (?)',
        [designation] );
       
       
    }

    
    static getid(){
        return db.execute (
            'SELECT MAX(id_restau) as id_restau FROM restaurant');
     
    }

    static postImageRestau(logo,id_restau){
 
        return db.execute('UPDATE restaurant SET logo = ? WHERE id_restau = ?',[logo,id_restau]);
       
       
    }

       
    static getSommeCommande(id_restau){
        return db.execute (
            'SELECT SUM(somme_com) as somme_com FROM commande WHERE id_restau = ?',[id_restau]);
     
    }

    

    static findProdByRestau(id_restau){
        return db.execute (
            'Select * from produit WHERE id_restau = ?',[id_restau]);
     
    }
    
}

