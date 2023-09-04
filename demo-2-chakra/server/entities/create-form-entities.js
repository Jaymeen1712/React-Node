module.exports = function buildMakeFormTemplate({ Joi }) {
  return async function makeFormTemplate({
    firstName,
    lastName,
    email,
    subscribe,
    password
  }) {
    const schema = Joi.object({
      firstName: Joi.string().required().min(3),
      lastName: Joi.string().required().min(3),
      email: Joi.string().email().required(),
      password: Joi.string().required().min(6),
      subscribe: Joi.boolean(),
    });

    const { value, error } = schema.validate({
      firstName,
      lastName,
      email,
      subscribe,
      password,
    });

    if (error) throw error.details[0].message;

    return Object.freeze({
      getFirstName: () => value.firstName,
      getLastName: () => value.lastName,
      getEmail: () => value.email,
      getSubscribe: () => value.subscribe,
      getPassword: () => value.password,
    });
  };
};
