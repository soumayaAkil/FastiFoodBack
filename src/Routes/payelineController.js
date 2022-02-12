const express = require('express')
const router = express.Router()
const PayeLineController=require("../Controllers/payelineController");
router.get('/GetAllPayelines', PayeLineController.findAll);

module.exports=router;  