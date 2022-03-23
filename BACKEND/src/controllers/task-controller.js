const db = require("../models");

async function getTasks(req, res, next) {
  try {
    const task = await db.Task.find({})
      .select({
        title: 1,
      })
      .lean()
      .exec();

    res.status(200).send({
      data: task,
    });
  } catch (e) {
    next(e);
  }
}
module.exports = {
  getTasks,
};
