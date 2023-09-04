module.exports = function makeGetPageDataActionController({ getPageData }) {
  return async function getPageDataActionController(req, res) {
    try {
      const response = await getPageData({
        offset: req.params.offset,
        limit: req.params.limit,
      });
      res.send({
        body: response,
      });
    } catch (error) {
      res.send(error);
    }
  };
};
