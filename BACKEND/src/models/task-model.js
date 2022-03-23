const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
});

const TaskModel = new mongoose.model("task", TaskSchema);

module.exports = TaskModel;
