const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const session = require('express-session');
const app = express();
const collection = require('./mongodb');
const port = 3000;
const publicPath = path.join(__dirname, '../public');
const bodyParser = require("body-parser");
const puppeteer = require('puppeteer');


const route = require('./routes');


app.use(express.json());
app.use(morgan('combined'));
app.use(express.static(publicPath))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
    secret: 'secret-key',
    resave: false,
    saveUninitialized: true
  }));
  


app.engine(
    'hbs',
    handlebars.engine({
        extname: '.hbs',
    })
);
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resources/views'));

app.use(express.urlencoded({extended: false}));



app.post('/sign_up', async (req, res) => {
    
    const data = {
        name: req.body.name,
        password: req.body.password
    }

    
        const checking = await collection.findOne({name: req.body.name});
        if(checking){
            res.render('back');
            
        } else{
        console.log({data});
        await collection.insertMany([data])
        res.render('home');
    }
    
    
    
});
app.post('/login', async (req, res) =>{
    try{
        const check = await collection.findOne({name: req.body.name});
        if(check.password === req.body.password){
            res.render('edit');
            
        }else{
            res.send('wrong password');
            
        }
    }catch{
        res.render('back'); 
    }
    
});



route(app);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});