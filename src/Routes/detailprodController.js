const express = require('express')
const router = express.Router()
const DetailProdController=require("../Controllers/detailprodController");
router.get('/GetAllDetailprods', DetailProdController.findAll);

module.exports=router;  