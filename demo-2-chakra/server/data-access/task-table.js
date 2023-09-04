module.exports = function makeTaskTable({ connection }) {
  return Object.freeze({
    createForm,
    getForm,
    getSingleForm
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

  async function getSingleForm({ uuid }) {
    const sql = `SELECT * FROM contactForm WHERE uuid = '${uuid}'`;
    const result = await connection.query(sql);
    return result;
  }
};
