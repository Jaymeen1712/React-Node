module.exports = function makeGetForm({ getFormdb }) {
  return async function getForm() {
    const result = await getFormdb();
    if (result && result.length > 0) {
      return result[0];
    } else {
      throw result;
    }
  };
};
