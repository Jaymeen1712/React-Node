module.exports = function makeGetPageData({ Joi, getPageDatadb }) {
  return async function getPageData({ offset, limit }) {
    const validData = isValid({ offset, limit });
    const response = await getPageDatadb({
      offset: validData.offset,
      limit: validData.limit,
    });

    return response[0];
  };

  function isValid({ offset, limit }) {
    const schema = Joi.object({
      offset: Joi.number().required(),
      limit: Joi.number().required(),
    });

    const { value, error } = schema.validate({ offset, limit });

    if (error) {
      const message = error.details[0].message;
      throw { error: message };
    } else {
      return value;
    }
  }
};
