const express = require('express')
const router = express.Router()
const CourController=require("../Controllers/coursierController");
router.get('/GetCoursiersByF/:id_fact', CourController.findCoursier);
router.get('/GetCoursiersByFact/:id_fact', CourController.findCoursierM);
module.exports=router;  