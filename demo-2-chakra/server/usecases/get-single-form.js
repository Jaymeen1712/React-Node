module.exports = function makeGetSingleForm({ Joi, getSingleFormdb }) {
  return async function getSingleForm({ uuid }) {
    const validData = isValid({ uuid });
    const result = await getSingleFormdb({ uuid: validData.uuid });
    return result[0];
  };

  function isValid({ uuid }) {
    const schema = Joi.object({
      uuid: Joi.string().required(),
    });

    const { value, error } = schema.validate({ uuid });

    if (error) {
      const message = error.details[0].message;
      throw { error: message };
    } else {
      return value;
    }
  }
};
