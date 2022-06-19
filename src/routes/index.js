const newsRouter = require('./news');
const siteRouter = require('./site');

function Route(app) {
    app.use('/news', newsRouter);

    app.use('/', siteRouter);
}

module.exports = Route;
