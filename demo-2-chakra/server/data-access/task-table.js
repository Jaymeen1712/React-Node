module.exports = function makeTaskTable({ connection }) {
  return Object.freeze({
    createForm,
    getForm,
    getSingleForm,
    getPageData,
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
    const sql = `SELECT * FROM contactForm WHERE uuid = ?`;
    const result = await connection.query(sql, [uuid]);
    return result;
  }

  async function getPageData({ offset, limit }) {
    const sql = `SELECT * FROM contactForm LIMIT ? OFFSET ? `;
    const result = await connection.query(sql, [limit, offset]);
    return result;
  }
};
