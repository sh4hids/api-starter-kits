import { v4 as uuidV4 } from 'uuid';

import { DB } from '../config';

async function create(data = {}) {
  const now = new Date().toISOString();
  const id = uuidV4();

  const taskData = {
    ...data,
    id,
    createdAt: now,
    updatedAt: now,
  };

  const task = await DB.insert(taskData);

  return task;
}

async function getById(id) {
  const task = (await DB.findById(id)) || null;

  return task;
}

async function getAll(query) {
  const task = await DB.find(query);

  return task;
}

async function remove(id) {
  await DB.remove(id);

  return null;
}

export { create, getById, getAll, remove };
