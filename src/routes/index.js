const sign_upRouter =  require('./sign_up');
const siteRouter =  require('./site');



function route(app){
    app.use('/sign_up', sign_upRouter);
    app.use('/home', siteRouter);
    app.use('/back', siteRouter);
    app.use('/', siteRouter);
}

module.exports = route;
