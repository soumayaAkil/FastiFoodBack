const Client= require("../Models/clientModel")

exports.findAll = function(req, res) {
  Client.findAll(function(err, client) {
    if (err){
      res.send(err);
    }else{
    
      res.send(client);
    }  
  });
};