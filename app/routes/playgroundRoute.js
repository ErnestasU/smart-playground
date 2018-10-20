const playgroundController = require('../controllers/playgroundController');

module.exports = function(router) {
  router.route('/playgrounds')
      .get(playgroundController.get_all_playgrounds)
};
