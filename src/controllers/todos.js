import * as Todo from '../models/Todo';

async function create(ctx) {
  try {
    const data = ctx.request.body;

    const task = await Todo.create(data);

    ctx.response.success(task, 201, 'Task created successfully');
  } catch (error) {
    ctx.response.error(error);
  }
}

async function getById(ctx) {
  try {
    const { id } = ctx.request.params;

    const task = await Todo.getById(id);

    ctx.response.success(task, 200, 'Task fetched successfully');
  } catch (error) {
    ctx.response.error(error);
  }
}

async function getAll(ctx) {
  try {
    const { id } = ctx.request.body;

    const task = await Todo.getAll({ id });

    ctx.response.success(task, 200, 'Tasks fetched successfully');
  } catch (error) {
    ctx.response.error(error);
  }
}

async function remove(ctx) {
  try {
    const { id } = ctx.request.params;

    const task = await Todo.remove(id);

    ctx.response.success(task, 200, 'Task deleted successfully');
  } catch (error) {
    ctx.response.error(error);
  }
}

export { create, getById, getAll, remove };
