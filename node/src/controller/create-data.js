module.exports = function makeCreateDataControllerAction({ createData }) {
    return async function createDataControllerAction(req, res) {
        try {
            const response = await createData({ body: req.body });
            logger(response);
            res.send(response);
        } catch (error) {
            res.send(error);
        }
    };
};
