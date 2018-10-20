'use strict';
const trainersController = require('../controllers/trainersController');

module.exports = function(router) {

    router.route('/trainers')
        .get(trainersController.get_all_trainers)

    router.route('/trainers/:ref')
        .get(trainersController.get_trainer_by_ref);

  };
  
