const { Router } = require('express');
const {createuser, getallTasks, getaTasks, updateTasks,delTasks} = require('../controller/main.controller');

const router = Router();

// CREATE THE TASKS

router.route("/tasks").post(createuser);


// GET all Tasks
router.route("/tasks").get(getallTasks);
// GET a task
router.route("/tasks/:id").get(getaTasks);
// Update a task
router.route("/tasks/:id").put(updateTasks)
// Delete a task
router.route("/tasks/:id").delete(delTasks)

module.exports = router;

