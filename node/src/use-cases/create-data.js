module.exports = function makeCreateData({
  uuidv4,
  // Joi,
  moment,
  // makeDataTemplate,
  createDatadb,
}) {
  return async function createData({ body }) {
    console.log("🚀 ~ file: create-data.js:9 ~ createData ~ body:", body);
    const uuid = uuidv4();
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");

    let insertObj = {
      uuid: uuid,
      name: body.username,
      note: body.password,
      completed: body.completed,
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
