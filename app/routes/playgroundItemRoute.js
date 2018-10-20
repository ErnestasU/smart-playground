'use strict';

module.exports = function(router) {
    var itemController = require('../controllers/playgroundItemController');

    router.route('/trainers')
        .get(itemController.get_all_trainers);

    router.route('/trainer/:ref')
        .get(itemController.get_trainer_by_ref);

  };
  
