import { validate } from '../helpers';
import models from '../models';
import { TodoSchema } from '../models/Todo';

const { Todo } = models;

async function create(ctx) {
  const values = validate(TodoSchema, ctx);

  const task = await Todo.create(values);

  ctx.response.success({
    data: task,
    status: 201,
    message: 'Task created successfully',
  });
}

async function getById(ctx) {
  const { id } = ctx.request.params;

  const task = await Todo.findOne({
    where: {
      id,
    },
  });

  if (!task) {
    ctx.throw(404, 'Task not found');
  }

  ctx.response.success({
    data: task,
    message: 'Task fetched successfully',
  });
}

async function getAll(ctx) {
  const tasks = await Todo.findAll();

  ctx.response.success({
    data: tasks,
    message: 'Tasks fetched successfully',
  });
}

async function remove(ctx) {
  const { id } = ctx.request.params;

  const task = await Todo.findOne({
    where: {
      id,
    },
  });

  if (!task) {
    ctx.throw(404, 'Task not found');
  }

  await Todo.destroy({ where: { id } });

  ctx.response.success({
    data: null,
    status: 204,
    message: 'Task deleted successfully',
  });
}

export { create, getById, getAll, remove };
