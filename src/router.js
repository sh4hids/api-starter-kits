import Router from 'koa-router';

const router = new Router();

router.get('/health', (ctx) => {
  ctx.response.badRequest('Very Bad', [{ isBad: true }]);
  // ctx.response.ok('Server is up and running');
});

export default router;
