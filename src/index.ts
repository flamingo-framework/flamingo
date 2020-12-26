import Koa = require('koa');
import Router = require('@koa/router');

const app = new Koa();
const router = new Router();

router.get('/', async (ctx, next) => {
  ctx.body = 'Hello world!';
  await next();
});

app.use(router.routes());

app.listen(3000);
