const express = require('express')
const router = express.Router()
const facComController=require("../Controllers/FacComController");
router.get('/GetAllFactures', facComController.findAll);
module.exports=router;  