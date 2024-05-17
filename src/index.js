const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const mongoose = require('mongoose');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');

const app = express();
const port = 3000;

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

app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, '../public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser()); 
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
}));

app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.urlencoded({ extended: false }));

route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
