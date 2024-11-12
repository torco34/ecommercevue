const productsRouter = require('./productsRouters');

function routesApi(app) {

    app.use('/products', productsRouter);
}

module.exports = routesApi;