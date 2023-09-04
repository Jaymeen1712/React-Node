module.exports = function makeTaskTable({ connection }) {
  return Object.freeze({
    createForm,
    getForm,
  });

  async function createForm({ insertObj }) {
    const sql = `INSERT INTO contactForm SET ?`;
    const result = await connection.query(sql, insertObj);
    return result;
  }

  async function getForm() {
    const sql = `SELECT * FROM contactForm`;
    const result = await connection.query(sql);
    return result;
  }
};
