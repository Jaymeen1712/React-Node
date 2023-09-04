module.exports = function makeDeleteDataControllerAction({ deleteData }) {
  return async function deleteDataControllerAction(req, res) {
    try {
      const response = await deleteData({ uuid: req.params.uuid });
      res.send({
        body: response,
      });
    } catch (error) {
      res.send(error);
    }
  };
};
