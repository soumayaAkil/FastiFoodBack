const express= require('express');
const Reclamation= require("../Models/ReclamationModel")
//List Reclamation du Restaurant 
exports.GetRecalamtions= async (req,res,next)=>{

    const ress= await Reclamation.GetReclamations();
    rows = ress[0];
    if(rows.length !== 0)
    {
        res.send(rows);

    } else 
     {
        res.json({
            succes: false,
            Categorie: 'aucune Reclamation',
        });
     }
    }
 //Liste Reclamation du Super Admin
    exports.GetRecalamtionsSA= async (req,res,next)=>{

        const ress= await Reclamation.GetLReclamationsSA();
        rowsrsa = ress[0];
        if(rowsrsa.length !== 0)
        {
            res.send(rowsrsa);
    
        } else 
         {
            res.json({
                succes: false,
                Categorie: 'aucune Reclamation',
            });
         }
        }
           //Envoyer reclamation au restaurant : 
           exports.sendrecrestau=async(req,res,next)=>{
            const idrec = req.params.id_reclamation;
            const ress= await Reclamation.mpReclamation(idrec);
            res.json({succes:true});
        

           }
            //get type reclamation
            exports.typereclm=async(req,res,next)=>{
                const TR = await Reclamation.TREC();
                rowsrsa = TR[0];
                if(rowsrsa.length !== 0)
                {
                    res.send(rowsrsa);
            
                } else 
                 {
                    res.json({
                        succes: false,
                        Categorie: 'aucune type reclamation',
                    });
                 }

            }
            //post reclamation 
            exports.postrecc=async(req,res,next)=>{
                let id_client= req.query.id_client;
                let id_com= req.query.id_com;
                let id_TR= req.query.id_TR;
                let publish= req.query.publish;
                const rest=await Reclamation.postrec(id_client,id_com,id_TR,publish);

                res.send(" Reclamation Ajoutee avec succée");   
            }
            //Post Autre TReclamation 
            exports.postATrec=async(req,res,next)=>{
                let Designation= req.query.Designation;
                let Responsable= req.query.Responsable;
                let Description= req.query.Description;
              
                const rest=await Reclamation.postATrec(Designation,Responsable,Description);

                res.send(" Autre Type de Reclamation Ajoutee avec succée");   
            }
            //Post Autre
            exports.postAUTRE=async(req,res,next)=>{
                
                const ress= await Reclamation.getidTR();
                rows = ress[0];
                id_TR=rows[0].id_TR;
                console.log(rows[0].id_TR);
                
                let id_client= req.query.id_client;
                let id_com= req.query.id_com;
                let publish= req.query.publish;
                const restt=await Reclamation.postrec(id_client,id_com,id_TR,publish);
                res.send("Nouvelle Reclamation est Ajoutee avec succée");

              

            }
