module.exports = function makeDeleteData({ deleteDatadb }) {
  return async function deleteData({ uuid }) {
    console.log("🚀 ~ !!1file: delete-data.js:3 ~ deleteData ~ uuid:", uuid)
    const result = await deleteDatadb({ uuid });

    if (result && result[0].affectedRows > 0) {
      return {
        message: "Data deleted successfully",
        uuid,
      };
    } else {
      return { message: "Failed to delete task" };
    }
  };
};
