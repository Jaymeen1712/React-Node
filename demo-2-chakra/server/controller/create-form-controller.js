module.exports = function makeCreateFormActionController({ createForm }) {
  return async function createFormActionController(req, res) {
    console.log("🚀 ~ file: create-form-controller.js:3 ~ createFormActionController ~ req:", req.body)
    try {
      const response = await createForm({ body: req.body });
      res.send(response);
    } catch (error) {
      console.log("🚀 ~ file: create-form-controller.js:9 ~ createFormActionController ~ error:", error)
      res.send(error);
    }
  };
};
