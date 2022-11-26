const express = require("express")
const router = express.Router()
const { getAllTasks, createTask,getTask,updateTask,deletetask } = require("../controllers/taskController")
router.route("/").get(getAllTasks).post(createTask)
router.route("/:id").get(getTask).patch(updateTask).delete(deletetask)

module.exports = router