module.exports = function makeGetFormActionController({ getForm }) {
  return async function getFormActionController(req, res) {
    try {
      const response = await getForm();
      res.send(response);
    } catch (error) {
      res.send(error);
    }
  };
};
