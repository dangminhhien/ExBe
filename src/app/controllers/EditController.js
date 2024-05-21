const Task = require('../models/taskModel');

class EditController {
    async index(req, res) {
        try {
            let tasks = await Task.find({}).exec();
            tasks = tasks.map(task => task.toObject());
            res.render('edit', { tasks });
        } catch (error) {
            res.status(500).send('An error occurred while fetching tasks.');
        }
    }

    async toggle(req, res) {
        try {
            const taskId = req.params.id;
            let task = await Task.findById(taskId);
            if (task) {
                task.completed = !task.completed;
                await task.save();
            }
            res.redirect('/edit');
        } catch (error) {
            res.status(500).send('An error occurred while toggling the task.');
        }
    }
}

module.exports = new EditController();
