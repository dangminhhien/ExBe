const mongoose = require('mongoose');

const connectdb = () => {
    mongoose.connect('mongodb://localhost:27017/LoginSignUpTutorial', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => {
    console.log('Connected to database');
})
.catch((error) => {
    console.log('Connection failed:', error);
});

}
module.exports = connectdb;
