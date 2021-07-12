import Router from 'koa-router';

import * as todosController from './controllers/todos';

const router = new Router();

router.post('/todos', todosController.create);
router.get('/todos/:id', todosController.getById);
router.get('/todos', todosController.getAll);
router.delete('/todos/:id', todosController.remove);

router.get('/ping', (ctx) => {
  ctx.response.success('pong', 200);
});

export default router;
