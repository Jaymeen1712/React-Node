module.exports = function makeTaskTable({ connection }) {
    async function createData({ insertObj }) {
        console.log("🚀 ~ file: task-table.js:3 ~ createData ~ insertObj:", insertObj)
        const sql = `INSERT INTO posts SET ?`;
        const result = await connection.query(sql, insertObj);
        console.log("🚀 ~ file: task-table.js:6 ~ createData ~ result:", result)
        return result;
    }

    return Object.freeze({
        createData,
    });
};
