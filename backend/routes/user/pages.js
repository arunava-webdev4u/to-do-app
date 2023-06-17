const express = require('express');
const router = express.Router();
const { Task } = require('../../models/tasks');

router.get('/', (req, res) => {
    res.send('normal home page')
});

//! R
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find();
    res.send(tasks);
});

//! C
router.post('/tasks', async (req, res) => {
    const { name } = req.body;
    const newTask = new Task({ name: name });
    const result = await newTask.save();
    if (result)
        res.status(200).send(newTask);
    else
        res.status(500).send("Something went wrong");
});

//! U
router.put('/task/edit/:id', async (req, res) => {
    const { id } = req.params;
    const newTask = req.body;
    const oldTask = await Task.findById(id);
    if (oldTask) {
        const result = await Task.findByIdAndUpdate(id, newTask);
        console.log("Server update: ", result);
        res.status(200).send(result);
    }
    else res.status(404).send("Task not found");
});

//! D
router.delete('/task/:id', async (req, res) => {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (task) {
        const result = await Task.findByIdAndDelete(id);
        res.send(result);
    }
    else res.status(404).send("Taks not found");
});

module.exports = router;