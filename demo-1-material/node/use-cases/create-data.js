module.exports = function makeCreateData({
  uuidv4,
  // Joi,
  moment,
  makeDataTemplate,
  createDatadb,
}) {
  return async function createData({ body }) {
    const uuid = uuidv4();
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");

    const entitiesResult = makeDataTemplate({
      name: body.username,
      note: body.password,
      completed: body.completed,
    });

    let insertObj = {
      uuid: uuid,
      name: entitiesResult.getName(),
      note: entitiesResult.getNote(),
      completed: entitiesResult.getCompleted(),
      createdAt,
      updatedAt,
    };

    const result = await createDatadb({ insertObj });

    if (result[0].affectedRows > 0) {
      const response = {
        message: "Data created successfully",
        uuid: insertObj.uuid,
      };
      return response;
    } else {
      return { message: "Data failed" };
    }
  };
};
