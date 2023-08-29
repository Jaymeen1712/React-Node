module.exports = function makeDeleteDataControllerAction({ deleteData }) {
  return async function deleteDataControllerAction(req, res) {
    try {
      console.log("🚀 ~ !!!!!!11file: delete-data.js:5 ~ deleteDataControllerAction ~ req:", req)
      const response = await deleteData({ uuid: req.params.uuid });
      res.send({
        body: response,
      });
    } catch (error) {
      res.send(error);
    }
  };
};
