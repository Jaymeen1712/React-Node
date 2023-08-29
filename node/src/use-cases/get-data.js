module.exports = function makeGetData({ getDatadb }) {
  return async function getData() {
    const result = await getDatadb();

    if (result && result.length > 0) {
      return result[0];
    } else {
      throw result;
    }
  };
};
