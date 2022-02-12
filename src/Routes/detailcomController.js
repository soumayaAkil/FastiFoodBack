const express = require('express')
const router = express.Router()
const DetailComController=require("../Controllers/detailcomController");
router.get('/GetAllDetailcommandes', DetailComController.findAll);

module.exports=router;  