const express = require('express');
const signUpRouter = require('./sign_up');
const loginRouter = require('./login');
const siteRouter = require('./site');
const tasksRouter = require('./tasks');
const editRouter = require('./edit');


function route(app) {
    app.use('/tasks', tasksRouter);
    app.use('/edit', editRouter);
    app.use('/sign_up', signUpRouter);
    app.use('/login', loginRouter);
    app.use('/', siteRouter);
}

module.exports = route;