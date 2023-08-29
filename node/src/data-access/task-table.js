module.exports = function makeTaskTable({ connection }) {
  async function createData({ insertObj }) {
    const sql = `INSERT INTO posts SET ?`;
    const result = await connection.query(sql, insertObj);
    return result;
  }

  async function getData() {
    const sql = `SELECT * FROM posts`;
    const result = await connection.query(sql);
    return result;
  }

  async function deleteData({ uuid }) {
    const sql = `DELETE FROM posts WHERE uuid = '${uuid}'`;
    const result = await connection.query(sql);
    return result;
  }

  async function updateData({ uuid, updateObj }) {
    console.log("🚀 ~ file: task-table.js:21 ~ updateData ~ updateObj:", updateObj)
    const sql = `UPDATE posts SET ? WHERE uuid = ?`;
    const values = [updateObj, uuid];
    const result = await connection.query(sql, values);
    return result;
  }

  return Object.freeze({
    createData,
    getData,
    deleteData,
    updateData
  });
};
