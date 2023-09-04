module.exports = function makeCreateFormActionController({ createForm }) {
  return async function createFormActionController(req, res) {
    try {
      const response = await createForm({ body: req.body });
      res.send(response);
    } catch (error) {
      res.status(400).json({
        message: 'Data is required',
      });      
    }
  };
};
