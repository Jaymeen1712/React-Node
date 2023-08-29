module.exports = function makeGetDataControllerAction({ getData }) {
  return async function getDataControllerAction(req, res) {
    try {
      const response = await getData();
      logger(response);
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  };
};
