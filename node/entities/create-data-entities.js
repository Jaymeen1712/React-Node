module.exports = function buildMakeDataTemplate({ Joi }) {
  return async function makeDataTemplate({ name, note, completed }) {
    const schema = Joi.object({
      name: Joi.string().required().min(3),
      note: Joi.string().required(),
      completed: Joi.boolean().required(),
    });
    const { value, error } = schema.validate({
      name,
      note,
      completed,
    });
    if (error) {
      throw error.details[0].message;
    }
    return Object.freeze({
      getName: () => value.name,
      getNote: () => value.note,
      getCompleted: () => value.completed,
    });
  };
};
