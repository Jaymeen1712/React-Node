module.exports = function makeUpdateData({ updateDatadb, moment }) {
  return async function s({ uuid, body }) {
    const updateObj = {
      name: body.username,
      note: body.password,
      completed: false,
      updatedAt: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    const result = await updateDatadb({ uuid, updateObj });
    if (result && result[0].affectedRows > 0) {
      return {
        message: "Task updated successfully",
        uuid: uuid,
      };
    }
    return { message: "Failed to update task" };
  };
};
