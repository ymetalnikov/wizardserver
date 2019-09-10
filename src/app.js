const Koa = require('koa');
const router = require('./controllers/');
const setHandlers = require('./handlers/');

const app = new Koa();

setHandlers(app);
app.use(router());

module.exports = app;
