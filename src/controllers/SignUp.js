const Router = require('koa-router');

const wait = () => new Promise((resolve) => {setTimeout(resolve, 500); });

const router = new Router({ prefix: '/api/sign-up' });

router.post(
  '/one',
  async (ctx) => {
    const { body } = ctx.request;
    const isEmailExists = !!emailList.some((email) => email === body.email);

    await wait();

    if (isEmailExists) {
      ctx.body =  { status: 'error', fields: { email: `Email ${body.email} is already exists` } };
    } else {
      ctx.body =  { status: 'ok' };
    }
  }
);

router.post(
  '/two',
  async (ctx) => {
    const { body } = ctx.request;
    const isPhoneExists = !!phoneList.some((phone) => phone === body.phone);

    await wait();

    if (isPhoneExists) {
      ctx.body =  { status: 'error', fields: { email: `Phone ${body.phone} is already exists` } };
    } else {
      ctx.body =  { status: 'ok' };
    }
  }
);

router.get('/phones', (ctx) => { ctx.body =  { status: 'ok', list: phoneList }; });
router.get('/list', (ctx) => { ctx.body =  { status: 'ok', list: emailList }; });

module.exports = router;
