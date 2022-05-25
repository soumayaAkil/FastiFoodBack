const express = require('express')
const router = express.Router()
const RestauController=require("../Controllers/restaurantController");
router.get('/GetAllRestaurants', RestauController.findAll);
router.get('/GetRestau/:id_restau', RestauController.findRestau);
router.get('/GetDetailRestau/:id_restau', RestauController.detailRestau);
router.post('/AddRestau', RestauController.post);

module.exports=router;  