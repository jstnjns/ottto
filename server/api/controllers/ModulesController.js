/**
 * ModulesController
 *
 * @description :: Server-side logic for managing modules
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  update: function(req, res) {

    ModulesService
      .update(req.param('id'), req.body, req)
      .catch(res.badRequest);

    return Modules
      .find(req.param('id'))
      .then(res.ok)
      .catch(res.badRequest);

  },


  register: function(req, res) {

    return ModulesRegistrationService
      .register(req.param('chip'), req.param('ip'))
      .then(res.ok)
      .catch(res.badRequest);

  }

};
