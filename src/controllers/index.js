const Router = require('koa-router');
const combineRouters = require('koa-combine-routers');
const sigUp = require('./SignUp');
const fixtures = require('../fixtures');

const fixtureRouter = new Router();

fixtureRouter.get('/phones', (ctx) => {
  ctx.body = { status: 'ok', list: fixtures.phoneList };
});
fixtureRouter.get('/emails', (ctx) => {
  ctx.body = { status: 'ok', list: fixtures.emailList };
});

module.exports = combineRouters(
  sigUp,
  fixtureRouter
);
