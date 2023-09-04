module.exports = function makeGetSingleFormActionController({ getSingleForm }) {
  return async function getSingleFormActionController(req, res) {
    try {
      const response = await getSingleForm({ uuid: req.params.uuid });
      res.send({
        body: response,
      });
    } catch (error) {
      res.send(error);
    }
  };
};
