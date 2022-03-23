const Router = require("express").Router;

const taskController = require ("../controllers/task-controller")

const taskRouter = Router();

taskRouter.get("/", taskController.getTasks);

taskRouter.get("/active", taskController.getActiveTasks);

taskRouter.get("/completed", taskController.getCompletedTasks);

taskRouter.post("/", taskController.createTask);

taskRouter.patch("/", taskController.updateTask);

taskRouter.delete("/", taskController.deleteTask);

