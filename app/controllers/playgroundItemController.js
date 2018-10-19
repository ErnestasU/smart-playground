'use strict';

exports.get_item = function(req, res) {
    res.json({"itemId" : req.params.itemId})
};

exports.update_item = function(req, res) {
    res.json(req.body);
};
  
  

