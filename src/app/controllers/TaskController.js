
const { logout } = require('../../middleware/auth');
const Task = require('../models/taskModel');

const taskController = {
    index: async (req, res) => {
        try {
            let tasks = await Task.find({});
            tasks = tasks.map(task => task.toObject());
            res.render('tasks', { tasks });
        } catch (err) {
            res.status(400).json({ error: 'Error!!!' });
        }
    },

    create: async (req, res) => {
        const task = new Task({
            text: req.body.text,
            completed: false
        });

        try {
            await task.save();
            res.redirect('/tasks');
        } catch (err) {
            res.status(400).json({ error: 'Error creating task!!!' });
        }
    },

    toggle: async (req, res) => {
        try {
            const task = await Task.findById(req.params.id);
            task.completed = !task.completed;
            await task.save();
            res.redirect('/tasks');
        } catch (err) {
            res.status(400).json({ error: 'Error toggling task!!!' });
        }
    },

    delete: async (req, res) => {
        try {
            await Task.findByIdAndDelete(req.params.id);
            res.redirect('/tasks');
        } catch (err) {
            res.status(400).json({ error: 'Error deleting task!!!' });
        }
    },
    logout: async (req, res) => {
        try {
            res.clearCookie('token');
            res.redirect('/login');
        } catch (error) {
            console.error('Error logging out:', error);
            res.status(500).json({ error: 'Internal Server Error' });
        }
    },
};

module.exports = taskController;
