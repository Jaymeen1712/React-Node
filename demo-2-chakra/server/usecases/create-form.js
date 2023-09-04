module.exports = function makeCreateForm({
  uuidv4,
  moment,
  makeFormTemplate,
  createFormdb,
}) {
  return async function createForm({ body }) {
    console.log("inside createform.......................1.1111111111");
    const uuid = uuidv4();
    const createdAt = moment().format("YYYY-MM-DD HH:mm:ss");
    const updatedAt = moment().format("YYYY-MM-DD HH:mm:ss");

    const { firstName, lastName, email, subscribe, password } = body;

    const entitiesResult = await makeFormTemplate.makeFormTemplate({
      firstName,
      lastName,
      email,
      subscribe,
      password,
    });

    let insertObj = {
      uuid,
      firstName: entitiesResult.getFirstName(),
      lastName: entitiesResult.getLastName(),
      email: entitiesResult.getEmail(),
      subscribe: entitiesResult.getSubscribe(),
      password: entitiesResult.getPassword(),
    };

    const result = await createFormdb({ insertObj });

    if (result[0].affectedRows > 0) {
      const response = {
        message: "Task created successfully!",
        uuid: insertObj.uuid,
      };
      return response;
    } else {
      return { message: "Task Failed!" };
    }
  };
};
