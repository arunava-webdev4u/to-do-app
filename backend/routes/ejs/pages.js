const { Task } = require('../../models/tasks');
const express = require('express');
const methodOverride = require('method-override');

const router = express.Router();
router.use(methodOverride('_method'));

//! R: GET list of all tasks
router.get('/tasks', async (req, res) => {
    const tasks = await Task.find({});
    res.render('index', { tasks });
});

//! C: Create task
router.post('/tasks', async (req, res) => {
    const { task } = req.body;
    const newTask = new Task({ name: task });
    newTask.save();
    res.redirect('/ejs/tasks')
});

//! U: Update task
router.put('/task/edit/:id', async(req, res) => {
    const { id } = req.params;
    console.log(req.body)
    // const task = await Task.findById(id);
    const task = await Task.findByIdAndUpdate(id, req.body);
    console.log(task);
    res.redirect('/ejs/tasks');
    // res.send(id);
    // res.send(task)
});

//! D: Delete task
router.delete('/task/:id', async (req, res) => {
    const { id } = req.params;
    await Task.findByIdAndDelete(id)
    res.redirect('/ejs/tasks');
});


module.exports = router;