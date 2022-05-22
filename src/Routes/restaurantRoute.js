const express = require('express')
const router = express.Router()
const RestauController=require("../Controllers/restaurantController");
router.get('/GetAllRestaurants', RestauController.findAll);
router.get('/GetRestau/:id_restau', RestauController.findRestau);
router.post('/AddRestau', RestauController.post);

module.exports=router;  