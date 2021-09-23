import Router from 'koa-router';

import * as todosController from './controllers/todos';
import { validateRequest } from './middlewares';
import { TodoSchema } from './models/Todo';

const router = new Router();

router.post('/todos', validateRequest(TodoSchema), todosController.create);
router.get('/todos/:id', todosController.getById);
router.put('/todos/:id', validateRequest(TodoSchema), todosController.update);
router.get('/todos', todosController.getAll);
router.delete('/todos/:id', todosController.remove);

router.get('/ping', (ctx) => {
  ctx.response.success({ data: 'pong', status: 200 });
});

export default router;
