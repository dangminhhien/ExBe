const express = require('express');
const signUpRouter = require('./sign_up');
const loginRouter = require('./login');
const siteRouter = require('./site');
const tasksRouter = require('./tasks');
const editRouter = require('./edit');

function route(app) {
    app.use('/tasks', tasksRouter);  // Chỉ admin có thể truy cập
    app.use('/edit', editRouter);    // User và admin có thể truy cập
    app.use('/sign_up', signUpRouter);
    app.use('/login', loginRouter);
    app.use('/', siteRouter);
}

module.exports = route;