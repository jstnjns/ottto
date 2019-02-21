module.exports = async function register(req, res) {

  return ModuleRegistrationService
    .register(req.param('chip'), req.param('ip'))
    .then(res.ok)
    .catch(res.badRequest);

};
