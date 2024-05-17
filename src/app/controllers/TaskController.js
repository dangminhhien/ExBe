const Task = require('../models/todoListModel');

class TaskController {
    async index(req, res) {
        const tasks = await Task.find({});
        res.render('tasks', { tasks });
    }

    async create(req, res) {
        const newTask = new Task(req.body);
        await newTask.save();
        res.redirect('/tasks');
    }

    async toggle(req, res) {
        const task = await Task.findById(req.params.id);
        task.completed = !task.completed;
        await task.save();
        res.redirect('/tasks');
    }

    async delete(req, res) {
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/tasks');
    }
}

module.exports = new TaskController();
