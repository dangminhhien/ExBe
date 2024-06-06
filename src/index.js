const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const path = require('path');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const connectdb = require('./db/connectdb');
const { authenticateToken } = require('./middleware/auth');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');


const app = express();
const port = 3000;

connectdb()
app.use(cookieParser());
app.use(express.json());    
app.use(morgan('combined'));
app.use(express.static(path.join(__dirname, 'public')));
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

app.use(flash());

// Set global variables for templates
app.use((req, res, next) => {
  res.locals.user = req.user || null;
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  next();
});

route(app);

app.listen(port, () => {    
    console.log(`Example app listening on port ${port}`);
});
