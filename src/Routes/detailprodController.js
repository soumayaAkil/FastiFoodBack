const express = require('express')
const router = express.Router()
const DetailProdController=require("../Controllers/detailprodController");
router.get('/GetAllDetailprods', DetailProdController.findAll);
router.get('/GetDetailprodByProd/:id_prod', DetailProdController.findDetailByProd);
router.get('/GetPriceProd/:id_prod/:id_unite', DetailProdController.findPrice);


module.exports=router;  