module.exports = function makeUpdateDataControllerAction({ updateData }) {
  return async function updateDataControllerAction(req, res) {
    console.log("🚀 ~ file: update-data.js:3 ~ updateDataControllerAction ~ req:", req.params)
    try {
      const response = await updateData({
        uuid: req.params.uuid,
        body: req.body,
      });
      res.send({
        statusCode: 200,
        body: response,
      });
    } catch (error) {
      res.send(error);
    }
  };
};
