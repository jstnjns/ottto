
module.exports = async function update(req, res) {
  console.log('Receiving:', req.param('id'), req.body);

  ModuleUpdateService
    .update(req.param('id'), req.body, req)
    .catch(res.badRequest);

  return Modules
    .find(req.param('id'))
    .then(res.ok)
    .catch(res.badRequest);
};
