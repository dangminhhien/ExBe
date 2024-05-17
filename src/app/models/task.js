const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/TodoList', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => {
    console.log('Connected to database 212');
})
.catch((error) => { // Add a parameter to catch for catching the error
    console.log('Connection failed:', error); // Log the error for better debugging
});

const taskSchema = new mongoose.Schema({
    text: String,
    completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;