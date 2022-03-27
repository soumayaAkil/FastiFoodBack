const express = require('express')
const router = express.Router()
const PromoController=require("../Controllers/promotionController");

router.get('/GetlistPromo', PromoController.findPromotion);
router.get('/images/:id_promo',PromoController.Images);
router.post('/postProd',PromoController.post);
module.exports=router;  