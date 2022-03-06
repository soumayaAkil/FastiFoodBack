const express = require('express')
const router = express.Router()
const CourController=require("../Controllers/coursierController");
router.get('/GetCoursiersByF/:id_fact', CourController.findCoursier);
module.exports=router;  