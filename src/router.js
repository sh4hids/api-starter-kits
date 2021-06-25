import Router from 'koa-router';

const router = new Router();

router.get('/health', (ctx) => {
  ctx.response.success('Server is up and running', 200);
});

export default router;
