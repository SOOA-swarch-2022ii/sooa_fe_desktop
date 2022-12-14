const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/auth',
        createProxyMiddleware({
            target: 'http://localhost:8090',
            changeOrigin:true,
        })
    );
    app.use(
        '/graphql',
        createProxyMiddleware({
            target: 'http://localhost:8090',
            changeOrigin:true,
        })
    );
};
