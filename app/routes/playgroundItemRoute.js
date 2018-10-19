'use strict';

module.exports = function(router) {
    var itemController = require('../controllers/playgroundItemController');
  
    router.route('/items/:itemId')
      .get(itemController.get_item)
      .put(itemController.update_item);
  };
  