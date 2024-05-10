const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/LoginSignUpTutorial')
.then(() => {
    console.log('Connected to database');
})
.catch((error) => { // Add a parameter to catch for catching the error
    console.log('Connection failed:', error); // Log the error for better debugging
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,   
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model('collection', LoginSchema);

module.exports = collection; // Export the model instead of the schema

