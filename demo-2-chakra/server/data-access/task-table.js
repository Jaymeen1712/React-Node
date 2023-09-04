module.exports = function makeTaskTable({ connection }) {
  return Object.freeze({
    createForm,
  });

  async function createForm({ insertObj }) {
    const sql = `INSERT INTO contactForm SET ?`;
    const result = await connection.query(sql, insertObj);
    return result;
  }
};
