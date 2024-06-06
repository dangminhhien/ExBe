const Task = require('../models/taskModel');


class editController {
    async index(req, res) {
       try {
           let tasks = await Task.find({}).exec();
           tasks = tasks.map(task => task.toObject());
           res.render('edit', { tasks });
       } catch (error) {
           res.status(400).send('An error occurred while fetching tasks.');
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
            res.status(400).send('An error occurred while toggling the task.');
        }
    }
    async logout(req, res) {
        try {
            res.clearCookie('token');
            req.flash('success_msg', 'You are logged out');
            res.redirect('/login');
        } catch (err) {
            console.error('Error logging out:', err);
            res.status(500).json({ error: 'Internal server error' });
        }
    }
}

module.exports = new editController();
