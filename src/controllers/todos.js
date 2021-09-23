import models from '../models';

const { Todo } = models;

async function create(ctx) {
  const task = await Todo.create(ctx.request.body);

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

async function update(ctx) {
  const { id } = ctx.request.params;

  let task = await Todo.findOne({
    where: {
      id,
    },
  });

  if (!task) {
    ctx.throw(404, 'Task not found');
  }

  task = await task.update(ctx.request.body);

  ctx.response.success({
    data: task,
    status: 200,
    message: 'Task updated successfully',
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

export { create, getById, update, getAll, remove };
