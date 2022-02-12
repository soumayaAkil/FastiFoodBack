const express = require('express')
const router = express.Router()
const RestauController=require("../Controllers/restaurantController");
router.get('/GetAllRestaurants', RestauController.findAll);

module.exports=router;  