const Restaurant= require("../Models/restaurantModel")

exports.findAll = function(req, res) {
  Restaurant.findAll(function(err, restaurant) {
    if (err){
      res.send(err);
    }else{
    
      res.send(restaurant);
    }  
  });
};

